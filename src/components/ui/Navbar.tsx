"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <div className="shadow-md shadow-gray-200 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-3xl font-bold tracking-tight">
                    Hungry<span className="text-amber-500">Hub</span>
                </Link>
                Navbar
            </div>
        </div>
    );
}
