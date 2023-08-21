import { Navbar } from "@/components/layouts/Navbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect } from "react";
import { toast } from "react-toastify";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

export const Auth = ({ meta, children}: IMainProps) => {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (session) {
        router.push('/job');
        toast.success('Login successfully!', {
            toastId: '14',
        });
      }
    }, [session])

    return <div className="h-screen">
        {meta}

        <main>
          {children}
        </main>
    </div>
}