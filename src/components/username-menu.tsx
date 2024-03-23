import { useUser } from "@auth0/nextjs-auth0/client";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { CircleUser, LogOut, User } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarImage } from "./ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
} from "./ui/dropdown-menu";

export default function UsernameMenu() {
    const { user } = useUser();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 font-semibold hover:text-orange-500 transition outline-none">
                {user?.nickname}
                {user?.picture ? (
                    <Avatar>
                        <AvatarImage src={user.picture} />
                    </Avatar>
                ) : (
                    <CircleUser />
                )}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <Link href="/user-profile">
                    <DropdownMenuItem className="cursor-pointer">
                        <User className="mr-2 h-4 w-4" />
                        <span>User Profile</span>
                    </DropdownMenuItem>
                </Link>
                <Link href="/api/auth/logout">
                    <DropdownMenuItem className="cursor-pointer">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Logout</span>
                    </DropdownMenuItem>
                </Link>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
