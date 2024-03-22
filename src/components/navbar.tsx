"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { MobileNavMenu } from "./mobile-nav-menu";

export default function Navbar() {
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
                    <Button
                        variant="ghost"
                        className="font-bold hover:text-amber-500 hover:bg-white"
                    >
                        Login
                    </Button>
                </div>
            </div>
        </div>
    );
}
