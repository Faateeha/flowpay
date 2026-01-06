import React, { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button'
import {PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink} from 'react-plaid-link';
import { useRouter } from 'next/navigation';
import { createLinkToken } from '@/lib/actions/user.action';

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
    const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: string) => {
       // await exchangePublicToken({
        //    publicToken: public_token,
        //    user,
        //})
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
        <Button>
            Connect bank
        </Button>
    ): (
        <Button>
            connect bank
        </Button>
    )}
    </>
  )
}

export default Plaidlink
