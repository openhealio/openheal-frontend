import fs from "fs";
import path from "path";

const textsDirectory = path.join(process.cwd(), "data");

export async function getUserDataFrom(fileName) {
  const fullPath = path.join(textsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const jsonObject = JSON.parse(fileContents);

  console.log("jsonObject: ", jsonObject);
  return {
    ...jsonObject,
  };
}
