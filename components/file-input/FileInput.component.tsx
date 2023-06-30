import { useCallback, useState } from "react";
import { useDropzone, DropzoneState } from "react-dropzone";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import * as Styled from "./FileInput.style";

interface FileInputProps {}

interface InputProps {
  dropzone: DropzoneState;
}

interface HasFileProps {
  file?: File;
  removeFile: () => void;
}

export const FileInput = () => {
  const [file, setFile] = useState<File | null>(null);

  const removeFile = useCallback(() => {
    setFile(null);
  }, [file]);

  const onDrop = useCallback((files: File[]) => {
    setFile(files[0]);
  }, []);

  const dropzone = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
  });

  if (file) return <HasFile file={file} removeFile={removeFile} />;

  return <Input dropzone={dropzone} />;
};

const Input = ({ dropzone }: InputProps) => {
  const { getRootProps, getInputProps, isDragActive } = dropzone;

  return (
    <Styled.FileInputWrapper>
      <div
        {...getRootProps()}
        className={`
          h-full 
          rounded-lg 
          border-dashed 
          border-4 
          border-gray-600 
          hover:border-gray-500 
          bg-gray-700 
          hover:bg-gray-600
          transition-all
          ${isDragActive ? "border-blue-500" : "border-gray-400"}
        `}
      >
        <label htmlFor="dropzone-file" className="cursor-pointer w-full h-full">
          <div
            className="
              flex 
              flex-col 
              items-center 
              justify-center 
              pt-5 
              pb-6 
              w-full 
              h-full
            "
          >
            {/* <div
              className={`
                UploadIcon 
                w-10 h-10 
                mb-3 
                ${isDragActive ? "text-blue-500" : "text-gray-400"}
              `}
            ></div> */}
            {isDragActive ? (
              <p className="font-bold text-lg text-blue-400">
                Solte para adicionar
              </p>
            ) : (
              <>
                <p className="mb-2 text-lg text-gray-400">
                  <span className="font-bold">Clique para enviar</span> ou
                  arraste até aqui
                </p>
                <p className="text-gray-400 text-sm">PDF</p>
              </>
            )}
          </div>
        </label>
        <input {...getInputProps()} className="hidden" />
      </div>
    </Styled.FileInputWrapper>
  );
};

const HasFile = ({ file, removeFile }: HasFileProps) => {
  return (
    <Styled.FileInputWrapper>
      <div
        className="
      h-full 
      rounded-lg 
      border-dashed 
      border-4 
      border-gray-600 
      bg-gray-700 
      flex 
      justify-center 
      items-center"
      >
        <div
          className="
        bg-white  
          rounded-md 
          shadow-md 
          flex 
          gap-3 
          items-center 
          justify-center"
        >
          {/* <FileIcon className="w-5 h-5 my-4 ml-4" /> */}
          <span className="text-sm text-gray-500 my-4 ml-4">{file?.name}</span>
          <button
            type="button"
            className="place-self-start"
            onClick={removeFile}
          >
            <CloseRoundedIcon fontSize="small" />
          </button>
        </div>
      </div>
    </Styled.FileInputWrapper>
  );
};
