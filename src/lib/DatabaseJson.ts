import fs from "fs";

export default class DatabaseJson {
  constructor(public fileName:string) {}

  readData(): Promise<JSON> {
    return new Promise((resolve, reject) => {
      fs.readFile(this.fileName, "utf8", (err, data) => {
        if (err) reject(err);
        else resolve(JSON.parse(data));
      });
    });
  }

  writeData(data:JSON):Promise<JSON> {
    return new Promise((resolve, reject) => {
      fs.writeFile(this.fileName, JSON.stringify(data), (err) => {
        if (err) reject(err);
        else resolve(data);
      });
    });
  }
}


