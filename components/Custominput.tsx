import React from 'react'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from './ui/input'
import { Control, FieldPath } from 'react-hook-form'
import { z } from "zod"
import { authFormSchema } from '@/lib/utils'

interface CustomInput {
    control: Control<z.infer<typeof authFormSchema>>,
    name: FieldPath<z.infer<typeof authFormSchema>>,
    label: string,
    placeholder: string
}

const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className='flex flex-col gap-1.5'>
                    <FormLabel className="text-14 w-full max-w-[280px] font-medium text-gray-700">
                        {label}
                    </FormLabel>
                    <div className="flex w-full flex-col">
                        <FormControl>
                            <Input
                                placeholder={placeholder}
                                className='input-class'
                                type={name === 'password' ? 'password' : 'text'}
                                {...field} />
                        </FormControl>
                        <FormMessage className="text-[12px] text-red-500 mt-2" />
                    </div>
                </div>

            )}
        />
    )
}

export default CustomInput
