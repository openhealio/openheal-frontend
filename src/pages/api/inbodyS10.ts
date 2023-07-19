import { NextApiRequest, NextApiResponse } from "next";
import ApiInbodyS10JsonHandler from "../../lib/ApiInbodyS10JsonHandler";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(400).json({ message: "Something went wrong" });
  }

  const pdfBuffer = await ApiInbodyS10JsonHandler(req.body);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=\"pdf-file.pdf\"");
  res.status(200).send(pdfBuffer);
}

export const config = {
  api: {
    responseLimit: false,
  },
};
