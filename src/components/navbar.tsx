"use client";

import { useCreateCurrentUser } from "@/api-services/userApi";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { useEffect } from "react";
import { MobileNavMenu } from "./mobile-nav-menu";
import { Button } from "./ui/button";
import UsernameMenu from "./username-menu";
import { useAppSelector } from "@/redux/hook";
import { selectAuth } from "@/redux/features/authSlice";

export default function Navbar() {
    const { isLoggedIn } = useAppSelector(selectAuth);

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
                    {isLoggedIn ? (
                        <UsernameMenu />
                    ) : (
                        <Link href={"/login"}>
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
