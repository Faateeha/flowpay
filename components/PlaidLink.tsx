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
    if (!user || token) return;

    const getLinkToken = async () => {
      const data = await createLinkToken(user);

      // 🔑 MUST be link_token
      setToken(data?.link_token);
    };

    getLinkToken();
  }, [user, token]);

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

  // ✅ MEMOIZE CONFIG (this stops double script injection)
  const config = useMemo<PlaidLinkOptions>(
    () => ({
      token,
      onSuccess,
    }),
    [token, onSuccess]
  );

  const { open, ready } = usePlaidLink(config);

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
