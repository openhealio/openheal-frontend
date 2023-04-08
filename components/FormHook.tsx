import React from 'react'
import InputStd from 'components/Styling/Form/InputStd'
import FormStd from 'components/Styling/Form/FormStd'
import ButtonStd from 'components/Styling/Form/ButtonStd'
import FilePickerStd from 'components/Styling/Form/FilePickerStd'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import Context from 'context/Context'
import ErrorMessageStd from 'components/Styling/Form/ErrorMessageStd'
import InputStdMask from 'components/Styling/Form/InputStdMask'
import InputStd2Mask from 'components/Styling/Form/InputStd2Mask'
import InputStd2 from 'components/Styling/Form/InputStd2'
// import ChatGPT from 'components/ChatGPT'




export default function FormHook() {

    const schema = Yup.object().shape({
        Nome: Yup.string().required("Este campo é obrigatório").min(4, "Tem que ter no minimo 4 letras"),
        crm: Yup.string().required("Este campo é obrigatório").matches(/^\d{2}\.\d{3}\.\d{3}-\d{1}$/, "CRM inválido - Lembre-se do novo formato: XX.0XX.XXX-X"),
        Endereco: Yup.string().required("Este campo é obrigatório"),
        Telefone: Yup.string().required("Este campo é obrigatório").matches(/^\(\d{2}\)\d{5}-\d{4}$/, "Tem que ter 11 numeros")
    })

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: "all",
        defaultValues: {
            Nome: "",
            crm: "",
            Endereco: "",
            Telefone: ""
        }
    });

    const onSubmit = data => console.log(data);


    return (
        <Context.Provider value={{ register, isValid, errors }}>
            <div className='pt-24'>
                <FormStd onSubmit={handleSubmit(onSubmit)} method="POST">
                    <p className="col-span-6" >Dados Gerais</p>
                    <FilePickerStd className="col-span-6" label="Upload a file" />
                    <InputStd className="col-span-6" label="Nome" span="Nome" fieldName="Nome" />
                    <ErrorMessageStd className="col-span-6" fieldName="Nome" />
                    <InputStdMask mask="99.999.999-9" className="col-span-6" label="CRM" span="CRM" fieldName="crm" />
                    <ErrorMessageStd className="col-span-6" fieldName="crm" />
                    {/* <ChatGPT/> */}


                </FormStd>
            </div>
            <div>
                <FormStd onSubmit={handleSubmit(onSubmit)} method="POST">
                    <p className="col-span-6" >Endereço</p>

                    <InputStd2 className="col-span-6" label="Endereço" fieldName="Endereco" />
                    <ErrorMessageStd className="col-span-2" fieldName="Endereco" />
                    
                    <InputStd2Mask mask="(99)99999-9999" className="col-span-6" label="Telefone" fieldName="Telefone" />
                    <ErrorMessageStd className="col-span-2" fieldName="Telefone" />

                    <ButtonStd spanClassName="col-span-6" type="submit" label="Enviar" />
                </FormStd>

            </div>


        </Context.Provider>

    )
}
