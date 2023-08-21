import { Navbar } from "@/components/layouts/Navbar";
import React, { ReactNode } from "react";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

export const Job = ({ meta, children}: IMainProps) => {
    return <div className="h-screen">
        {meta}

        <Navbar/>

        <main>
          {children}
        </main>
    </div>
}