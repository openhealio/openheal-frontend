import InputMask from 'react-input-mask';
import React, { useContext } from "react";
import Context from "context/Context";

interface Props {

    className?: string,
    htmlForLabel?: string,
    label?: string,
    fieldName?: string,
    mask?: string
}

export default function InputStd2Mask({ label, mask, fieldName, className, ...rest }: Props) {

    const { register } = useContext(Context)

    return (
        <div className={`${className}`}>

            <label htmlFor={label} className={`block text-sm font-medium text-gray-700`}>
                {label}
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
            <InputMask
                type="text"
                {...register(fieldName)}
                {...rest}
                mask={mask}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`} />
        </div>
        </div>
    )


}