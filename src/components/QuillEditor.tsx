import React, { useState } from "react";
import dynamic from "next/dynamic";
const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
import "react-quill/dist/quill.snow.css";

interface Props {
  userData: JSON;
  setUserData: (userData: JSON) => void;
}

export default function QuillEditor({ userData }: Props): JSX.Element {
  const [editorState, setEditorState] = useState(
    userData ? userData["Modelos"]["Prescricao"] : null
  );

  function onEditorStateChange(delta) {
    if (userData) {
      userData["Prescricoes"][0]["rawEditorState"] = delta;
      setEditorState(delta);
    } else {
      alert("Você precisa se conectar");
      console.log(userData);
      console.log(delta);
      setEditorState(delta);
    }
  }

  function onClickButton() {
    //setEditorState(userData["Modelos"]["Prescricao"])
    setEditorState(userData["Modelos"]["Prescricao"]);
    console.log(userData["Modelos"]["Prescricao"]);
  }

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };
  return (
    <>
      {userData && (
        <button
          onClick={onClickButton}
          className="bg-blue-200 rounded mt-4 p-1"
        >
          Prescrição
        </button>
      )}
      <QuillNoSSRWrapper
        className="overflow-auto h-96 mt-4"
        modules={modules}
        onChange={onEditorStateChange}
        defaultValue={editorState}
        value={editorState}
        theme="snow"
      />
    </>
  );
}
