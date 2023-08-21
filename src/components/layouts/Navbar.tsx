import React from "react";
import { signOut } from 'next-auth/react';
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export const Navbar = () => {
    const router = useRouter();

    const handleLogout = () => {
        signOut();
        toast.success('Logout successfully!', {
            toastId: '14',
        });
        router.push({ pathname: '/' }, undefined, { shallow: true });
    }

    return <nav className="navigation-wrapper flex items-center justify-between">
        <img className="logo inline" src="/logo.png" alt="logo" />
        
        <div className="text-base inline text-white cursor-pointer" onClick={() => handleLogout()}>
            Logout
        </div>
    </nav>
}