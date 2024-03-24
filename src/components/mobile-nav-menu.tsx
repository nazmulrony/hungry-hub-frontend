import { Menu, User } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Avatar, AvatarImage } from "./ui/avatar";
import MobileNavLinks from "./mobile-nav-links";
import Link from "next/link";

export const MobileNavMenu = () => {
    const { user } = useUser();
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-orange-500" />
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetHeader>
                    <SheetTitle>
                        {user?.email ? (
                            <div className="flex items-center gap-1">
                                {user?.picture ? (
                                    <Avatar>
                                        <AvatarImage src={user.picture} />
                                    </Avatar>
                                ) : (
                                    <User />
                                )}
                                {user.nickname}
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
                    {user?.email ? (
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
