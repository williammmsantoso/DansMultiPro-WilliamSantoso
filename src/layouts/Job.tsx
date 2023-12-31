import { Navbar } from "@/components/layouts/Navbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect } from "react";
import { toast } from "react-toastify";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

export const Job = ({ meta, children}: IMainProps) => {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (!session) {
        router.push('/');
        toast.error('Something wrong, please login first', {
            toastId: '14',
        });
      }
    }, [])

    return <div className="h-screen">
        {meta}

        <Navbar/>

        <main>
          {children}
        </main>
    </div>
}