import { LogOut, User } from "lucide-react";
import Link from "next/link";

export default function MobileNavLinks() {
    return (
        <>
            <Link
                href="/user-profile"
                className="active:bg-neutral-100 flex items-center  gap-2 px-2 py-1 rounded-lg"
            >
                <User className="h-4 w-4" /> User Profile
            </Link>
            <Link
                href="/api/auth/logout"
                className="active:bg-neutral-100 flex items-center  gap-2 px-2 py-1 rounded-lg"
            >
                <LogOut className="h-4 w-4" /> Logout
            </Link>
        </>
    );
}
