import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export const MobileNavMenu = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-orange-500" />
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetHeader>
                    <SheetTitle>
                        Welcome to Quick
                        <span className="text-orange-500">Crave</span>
                    </SheetTitle>
                </SheetHeader>
                <Separator />
                <Button className="w-full bg-orange-500">Login</Button>
            </SheetContent>
        </Sheet>
    );
};
