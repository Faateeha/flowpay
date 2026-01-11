"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "./ui/button";
import {
  PlaidLinkOnSuccess,
  PlaidLinkOptions,
  usePlaidLink,
} from "react-plaid-link";
import { useRouter } from "next/navigation";
import { createLinkToken, exchangePublicToken } from "@/lib/actions/user.actions";
import { PlaidLinkProps } from "@/types";

const Plaidlink = ({ user, variant }: PlaidLinkProps) => {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);

  // ✅ Create link token ONCE
 useEffect(() => {
    const getLinkToken = async () => {
      const data = await createLinkToken(user);
      console.log("PLAID LINK TOKEN (from server):", data?.linkToken);
      setToken(data?.linkToken ?? null);
    };

    if (user) getLinkToken();
  }, [user]);

  // ✅ Memoized success handler
  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (public_token: string) => {
      await exchangePublicToken({
        publicToken: public_token,
        user,
      });

      router.push("/");
    },
    [user, router]
  );
  

   // eslint-disable-next-line react-hooks/rules-of-hooks
   const { open, ready } = usePlaidLink({
    token,
    onSuccess,
  });
if (!token) return null;

  return (
    <>
      {variant === "primary" ? (
        <Button
          onClick={() => open()}
          disabled={!ready}
          className="text-[16px] rounded-lg border border-bankGradient bg-green-500 font-semibold text-white shadow-form"
        >
          Connect bank
        </Button>
      ) : variant === "ghost" ? (
        <Button
          onClick={() => open()}
          variant="ghost"
          className="flex cursor-pointer items-center justify-center gap-3 rounded-lg px-3 py-7 hover:bg-white lg:justify-start"
        >
          <p className="hidden xl:block text-[16px] font-semibold text-black-2">
            Connect bank
          </p>
        </Button>
      ) : (
        <Button
          onClick={() => open()}
          className="flex cursor-pointer gap-3 rounded-lg bg-transparent"
        >
          <p className="text-[16px] font-semibold text-black-2">
            Connect bank
          </p>
        </Button>
      )}
    </>
  );
};

export default Plaidlink;
