import Image from "next/image";

export default function DownloadAppSection() {
    return (
        <div className="grid md:grid-cols-2 gap-5 py-10 lg:py-20 ">
            <Image
                alt="landing-image"
                src="/images/landing.png"
                height={500}
                width={500}
                className="object-contain"
            />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-3xl tracking-tighter ">
                    Order takeaway even faster
                </span>
                <p>
                    Download the Quick
                    <span className="text-orange-500">Crave</span> for app
                    faster ordering and personalized recommendation
                </p>
                <Image
                    src="/images/appDownload.png"
                    alt="app-icon"
                    height={100}
                    width={400}
                    className="cursor-pointer object-contain h-10"
                />
            </div>
        </div>
    );
}
