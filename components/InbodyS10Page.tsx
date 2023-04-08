import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Context from "context/Context";
import ErrorMessageStd from "components/Styling/Form/ErrorMessageStd";
import FormStd from "components/Styling/Form/FormStd";
import FilePickerStd from "components/Styling/Form/FilePickerStd";
import InputStd2 from "components/Styling/Form/InputStd2";
import SelectRows from "components/SelectRows";
import ButtonStd from "components/Styling/Form/ButtonStd";

interface Row {
    index: number,
    '1.DATE&TIMES': string
    '2.ID': string

}




const schema = Yup.object().shape({
    name: Yup.string().required("Este campo é obrigatório"),
    // file: Yup.mixed().required("Este campo é obrigatório"),
    // indexes: Yup.array()

})

export default function InbodyS10Page(): JSX.Element {
    const { register, handleSubmit, trigger, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: "all",
        defaultValues: {
            name: "",
            file: null,
            indexes: []
        }
    })

    useEffect(() => {
        trigger()
    }, []);

    const [file, setFile] = useState<File>(null)
    const [indexes, setIndexes] = useState<number[]>([])
    const [loading, setLoading] = useState(false)
    const [selectedRows, setSelectedRows] = useState<Row[]>([])
   

    const onError = (errors) => {
        console.log(errors)
    }


    const onSubmit = async ({ name }, e) => {

        e.preventDefault()
        const dataToUpload = {
            name,
            selectedRows
        }
        //console.log(dataToUpload)

        const uploadUrl = '/api/inbodyS10'
        const response = await fetch(uploadUrl,
            {
                method: 'POST',
                body: JSON.stringify(dataToUpload),
                headers: {
                    'Content-Type': 'application/json'
                }

            }
        )
        const blob = await response.blob()

        const download = false

        if (!download) {
            const file = new Blob([blob], { type: 'application/pdf' })
            const fileURL = URL.createObjectURL(file)
            window.open(fileURL, '_blank')
            console.log("blob", blob)
        }
        else {
            const fileUrl = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = fileUrl;
            link.setAttribute('download', 'pdf-file.pdf');
            document.body.appendChild(link);
            link.click();
            URL.revokeObjectURL(fileUrl)
        }

    }


    const onChange = (e) => {
        const file = e.target.files[0];
        setFile(file)
    }

    return (
        <div className="pt-24">
            <Context.Provider value={{ register, errors }}>
                <FormStd onSubmit={handleSubmit(onSubmit, onError)} method="POST">
                    <FilePickerStd
                        onChange={onChange}
                        placeholder={file && file["name"]}
                        fieldName="File"
                        className="col-span-6"
                        label="Upload a file" />

                    <InputStd2
                        className="col-span-6"
                        label="Nome"
                        fieldName="name"
                    />

                    <ErrorMessageStd
                        className="col-span-6"
                        fieldName="name"
                    />

                    <SelectRows
                        indexes={indexes}
                        onPickIndexes={setIndexes}
                        file={file}
                        onLoading={setLoading}
                        onPickRows={setSelectedRows}
                        selectedRows={selectedRows}
                    >
                        <ButtonStd
                            type="submit"
                            enabled={!!indexes.length && isValid && !loading}
                            label={loading ? 'Obtendo listagem...' : "Fazer o download"}
                        />
                    </SelectRows>

                </FormStd>
            </Context.Provider>
        </div>
    )
}

