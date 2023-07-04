import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Context from "context/Context";
import { useCallback, useContext, useState } from "react";
import { DropzoneState, useDropzone } from "react-dropzone";
import * as Styled from "./FileInput.style";

interface FileInputProps {
  fieldName: string;
  onChangeFile: (file: File) => void;
}

interface InputProps {
  dropzone: DropzoneState;
  fieldName: string;
}

interface HasFileProps {
  file?: File;
  removeFile: () => void;
}

export const FileInput = ({ fieldName, onChangeFile }: FileInputProps) => {
  const [file, setFile] = useState<File | null>(null);

  const removeFile = useCallback(() => {
    setFile(null);
  }, [file]);

  const onDrop = useCallback((files: File[]) => {
    const newFile = files[0];
    setFile(newFile);
    onChangeFile(newFile);
  }, []);

  const dropzone = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
  });

  if (file) return <HasFile file={file} removeFile={removeFile} />;

  return <Input dropzone={dropzone} fieldName={fieldName} />;
};

const Input = ({ fieldName, dropzone }: InputProps) => {
  const { register } = useContext(Context);
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
            <CloudUploadIcon
              fontSize="large"
              className={` 
                w-10 h-10 
                mb-3 
                ${isDragActive ? "text-blue-500" : "text-gray-400"}
              `}
            />
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
        <input
          {...getInputProps()}
          {...register(fieldName)}
          className="hidden"
        />
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
          items-center
        "
      >
        <div
          className="
          bg-white  
            rounded-md 
            shadow-md 
            flex 
            gap-3 
            items-center 
            justify-center
          "
        >
          <UploadFileIcon className="w-5 h-5 my-4 ml-4" />
          <span className="text-sm text-gray-500 my-4 mx-4">{file?.name}</span>
          <CloseRoundedIcon
            fontSize="small"
            className="self-start cursor-pointer"
            onClick={removeFile}
          />
        </div>
      </div>
    </Styled.FileInputWrapper>
  );
};
