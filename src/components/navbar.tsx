"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { MobileNavMenu } from "./mobile-nav-menu";
import { useUser } from "@auth0/nextjs-auth0/client";
import { AfterCallback, handleLogin } from "@auth0/nextjs-auth0";
import UsernameMenu from "./username-menu";

export default function Navbar() {
    const { user, isLoading, error } = useUser();
    console.log(user);
    return (
        <div className="shadow-md shadow-gray-200 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-3xl font-bold tracking-tight">
                    Quick<span className="text-orange-500">Crave</span>
                </Link>
                <div className="md:hidden">
                    <MobileNavMenu />
                </div>
                <div className="hidden md:block">
                    {user?.email ? (
                        <UsernameMenu />
                    ) : (
                        <Link href={"/api/auth/login"}>
                            <Button
                                variant="ghost"
                                className="font-bold hover:text-amber-500 hover:bg-white"
                            >
                                Login
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
