'use client';
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { authFormSchema } from '@/lib/utils';
import CustomInput from './Custominput';



const AuthForm = ({ type }: { type: string }) => {

    const [user, setUser] = useState(null)

    // 1. Define your form.
    const form = useForm<z.infer<typeof authFormSchema>>({
        resolver: zodResolver(authFormSchema),
        defaultValues: {
            email: "",
            password: ''
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof authFormSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

 return (
    <section className="flex min-h-screen w-full max-w-[420px] flex-col justify-center gap-5 py-10 md:gap-8">
        <header className="flex flex-col gap-5 md:gap-8">
            <Link
                href="/"
                className=" cursor-pointer flex items-center gap-1 no-underline"
            >
                <Image src="/icons/logo.png" alt="logo" width={34} height={34} />
                <h1 className="text-[26px] font-ibm-plex-serif font-bold text-black">
                    Flowpay
                </h1>
            </Link>
            <div className='flex flex-col gap-1 md:gap-3'>
                <h3 className='text-[24px] lg:text-[36px] font-semibold text-gray-900'>
                    {user ? 'Link Account' : type === 'sign-in' ? 'Sign-in' : 'Sign-up'}
                    <p className='text-[16px] font-normal text-gray-600'>
                        {user ? 'Link your account to get started' : 'Please enter your details'}
                    </p>
                </h3>
            </div>
        </header>
        {user ? (
            <div className='flex flex-col gap-4'>{/*plaidlink*/}</div>) : (
            <>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <CustomInput control={form.control} name='email' label='Email' placeholder='Enter your email'/>
                        <CustomInput control={form.control} name='password' label='Password' placeholder='Enter your password'/>
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </>
        )}
    </section>
)
}

export default AuthForm