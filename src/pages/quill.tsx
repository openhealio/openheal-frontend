import React, { useState, useEffect } from "react";
import QuillEditor from "components/QuillEditor";

export default function QuillPage(): JSX.Element {
  const [file, setFile] = useState<File>(null);
  const [userData, setUserData] = useState<JSON>(null);

  function handleLoadFile() {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target.result;
      const jsonObject = JSON.parse(data.toString());
      setUserData(jsonObject);
    };
    reader.readAsText(file);
    //console.log(reader)
  }

  useEffect(() => {
    if (file) {
      handleLoadFile();
    }
  }, [file]);

  return (
    <div className="flex-col pt-20 h-screen px-4">
      <input
        type="file"
        name="json-file"
        id="json-file"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
        accept=".json"
        className="mt-2"
      />
      <p className="mt-4">
        {userData ? userData["Nome"] : "Voce precisa se conectar"}
      </p>
      <QuillEditor userData={userData} setUserData={setUserData} />
    </div>
  );
}
