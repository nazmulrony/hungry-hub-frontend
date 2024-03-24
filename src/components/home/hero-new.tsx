import Image from "next/image";

export default function HeroV2() {
    return (
        <div className="grid grid-cols-2 ">
            <div className="flex flex-col justify-center gap-6">
                <h1 className="text-5xl font-bold ">
                    Enjoy Your <span className="text-orange-500 ">Food</span>
                    without Leaving the House
                </h1>
                <p className=" text-muted-foreground">
                    Satisfy your cravings without stepping out- indulge in a
                    diverse culinary experience delivered straiht to your
                    doorstep, Elevate your home dining with a menu that caters
                    tour taste
                </p>
            </div>
            <div className=" grid place-items-center">
                <Image
                    src="/images/hero-img.png"
                    height={1000}
                    width={1200}
                    alt="burger-img"
                    className="max-w-[500px] object-contain"
                />
            </div>
        </div>
    );
}
