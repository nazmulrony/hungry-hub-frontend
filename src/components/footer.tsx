import Link from "next/link";

export default function Footer() {
    return (
        <div className="py-10 bg-neutral-900">
            <div className="container mx-auto flex flex-col md:flex-row justify-between text-white gap-5">
                <Link href="/" className="text-3xl font-bold cursor-pointer">
                    Quick<span className="text-orange-500">Crave</span>
                </Link>
                <div className="flex flex-col gap-2">
                    <div className="space-x-4">
                        <span className="cursor-pointer">Privacy Policy</span>
                        <span className="cursor-pointer">Terms of Service</span>
                    </div>
                    <span className="text-xs">Copyright @2024 Nazmul Rony</span>
                </div>
            </div>
        </div>
    );
}
