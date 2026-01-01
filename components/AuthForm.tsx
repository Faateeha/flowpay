'use client';
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { authFormSchema } from '@/lib/utils';
import CustomInput from './Custominput';
import { Loader2 } from 'lucide-react';



const AuthForm = ({ type }: { type: string }) => {

    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

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
        setIsLoading(true)
        console.log(values)
        setIsLoading(false)
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
                            <CustomInput control={form.control} name='email' label='Email' placeholder='Enter your email' />
                            <CustomInput control={form.control} name='password' label='Password' placeholder='Enter your password' />
                            <div className='flex flex-col gap-4'>
                                <Button type="submit" disabled={isLoading} className='text-[16px] rounded-lg border border-green-500 bg-green-500 font-semibold text-white shadow-form'>
                                {isLoading ? (<>
                                    <Loader2 size={20} className='animate-spin' /> &nbsp; Loading...
                                </>) : type === 'sign-in' ? 'Sign in' : 'Sign up'}
                            </Button>
                            </div>
                        </form>
                    </Form>

                    <footer className='flex justify-center gap-1'>
                        <p className='text-[14px] font-normal text-gray-300'>{type === 'sign-in' ? "Don't have an account?" : "Already have an account?"}</p>
                        <Link href={type === 'sign-in' ? '/sign-up' : 'sign-in'} className='no-underline text-[14px] cursor-pointer font-medium text-green-500'>
                        {type === 'sign-in' ? "Sign up" : "Sign in"}
                        </Link>
                    </footer>
                </>
            )}
        </section>
    )
}

export default AuthForm