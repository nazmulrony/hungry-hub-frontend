import { selectAuth, setLogout } from "@/redux/features/authSlice";
import { useAppSelector } from "@/redux/hook";
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
    const { user } = useAppSelector(selectAuth);
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 font-semibold hover:text-orange-500 transition outline-none">
                {user?.name}
                {user?.photo ? (
                    <Avatar>
                        <AvatarImage src={user.photo} />
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

                <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => setLogout()}
                >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
