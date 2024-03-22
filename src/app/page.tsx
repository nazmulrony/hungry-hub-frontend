import Link from "next/link";
import { Button } from "../components/ui/button";

export default function Home() {
    return (
        <main>
            <Button>Hello</Button>
            <div>
                <Button asChild>
                    <Link href={"/"}>Click here</Link>
                </Button>
            </div>
        </main>
    );
}
