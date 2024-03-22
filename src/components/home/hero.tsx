import Image from "next/image";

export default function Hero() {
    return (
        <div>
            <Image
                src="/images/hero.png"
                alt="hero"
                className="w-full max-h-[600px] object-cover"
                width={1400}
                height={600}
                draggable={false}
            />
        </div>
    );
}
