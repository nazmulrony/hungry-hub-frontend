import { setLogout } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hook";
import { LogOut, User } from "lucide-react";
import Link from "next/link";

export default function MobileNavLinks() {
    const dispatch = useAppDispatch();
    return (
        <>
            <Link
                href="/user-profile"
                className="active:bg-neutral-100 flex items-center  gap-2 px-2 py-1 rounded-lg"
            >
                <User className="h-4 w-4" /> User Profile
            </Link>
            <span
                className="active:bg-neutral-100 flex items-center  gap-2 px-2 py-1 rounded-lg cursor-pointer"
                onClick={() => dispatch(setLogout())}
            >
                <LogOut className="h-4 w-4" /> Logout
            </span>
        </>
    );
}
