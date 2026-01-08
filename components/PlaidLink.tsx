import React, { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button'
import {PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink} from 'react-plaid-link';
import { useRouter } from 'next/navigation';
import { createLinkToken, exchangePublicToken } from '@/lib/actions/user.actions';
import { PlaidLinkProps } from '@/types';

const Plaidlink = ({user, variant}: PlaidLinkProps) => {
    const router = useRouter();
    const [token, setToken] = useState('');

    useEffect(() => {
        const getLinkToken = async () => {
            const data = await createLinkToken(user);

            setToken(data?.LinkToken);
        }

        getLinkToken()
    }, [user])
    // eslint-disable-next-line react-hooks/preserve-manual-memoization
    const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: string) => {
       await exchangePublicToken({
         publicToken: public_token,
           user,
        })
        router.push('/')
    }, [user])
    const config: PlaidLinkOptions = {
        token,
        onSuccess
    }
    const {open, ready} = usePlaidLink(config);
  return (
    <>
    {variant === 'primary' ? (
        <Button onClick={() => open()} disabled={!ready} className='text-[16px] rounded-lg border border-bankGradient bg-green-500 font-semibold text-white shadow-form'>
            Connect bank
        </Button>
    ): variant === 'ghost' ? (
        <Button onClick={() => open()} variant="ghost" className="flex cursor-pointer items-center justify-center gap-3 rounded-lg px-3 py-7 hover:bg-white lg:justify-start">
            <p className='hiddenl text-16px font-semibold text-black-2 xl:block'>Connect bank</p>
        </Button>
    ): (
        <Button onClick={() => open()} className="flex justify-start! cursor-pointer gap-3 rounded-lg bg-transparent! flex-row">
            <p className='text-[16px] font-semibold text-black-2'>Connect bank</p>
        </Button>
    )}
    </>
  )
}

export default Plaidlink
