import { selectAuth } from "@/redux/features/authSlice";
import { useAppSelector } from "@/redux/hook";
import { Menu, User } from "lucide-react";
import Link from "next/link";
import MobileNavLinks from "./mobile-nav-links";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";

export const MobileNavMenu = () => {
    const { isLoggedIn, user } = useAppSelector(selectAuth);
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-orange-500" />
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetHeader>
                    <SheetTitle>
                        {isLoggedIn ? (
                            <div className="flex items-center gap-1">
                                {user?.photo ? (
                                    <Avatar>
                                        <AvatarImage src={user?.photo} />
                                    </Avatar>
                                ) : (
                                    <User />
                                )}
                                {user?.name}
                            </div>
                        ) : (
                            <>
                                Welcome to Quick
                                <span className="text-orange-500">Crave</span>
                            </>
                        )}
                    </SheetTitle>
                </SheetHeader>
                <Separator className="" />
                <div>
                    {isLoggedIn ? (
                        <MobileNavLinks />
                    ) : (
                        <Link href="/login">
                            <Button className="w-full bg-orange-500 ">
                                Login
                            </Button>
                        </Link>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    );
};
