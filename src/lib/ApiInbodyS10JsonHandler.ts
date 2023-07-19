import Bioimpedance from "classes/bioimpedance/Bioimpendance";
import BioReport from "classes/bioimpedance/BioReport";
import { PDFDocument } from "pdf-lib";

export default async function ApiInbodyS10JsonHandler(requestedJson) {
  const { name, selectedRows } = requestedJson;

  const reportFiles = await Promise.all(
    selectedRows.map((row) => {
      const bioimpedance = new Bioimpedance(row);
      const bioReport = new BioReport(bioimpedance, "pt", name);
      return bioReport.getCanvas(1000, 2000);
    })
  );

  // Cria um novo documento PDF
  const pdfDoc = await PDFDocument.create();

  await Promise.all(
    reportFiles.map(async (reportFile) => {
      // Adiciona a primeira imagem ao documento PDF
      const image = await pdfDoc.embedJpg(reportFile);
      const page = pdfDoc.addPage();
      const { width: pageWidth, height: pageHeight } = page.getSize();
      page.drawImage(image, {
        x: 0,
        y: 0,
        width: pageWidth,
        height: pageHeight,
      });
      return page;
    })
  );

  const pdfBytes = await pdfDoc.save();

  return Buffer.from(pdfBytes);
}
