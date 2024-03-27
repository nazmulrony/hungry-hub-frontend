import Image from "next/image";
import vector from "@/../public/images/auth-vector.png";
import SignUpForm from "@/components/signup/signup-form";

export default function SignUpPage() {
    return (
        <div className="grid lg:grid-cols-2 gap-10 md:gap-0 min-h-[70vh]">
            <div className="grid place-items-center">
                <Image
                    src={vector}
                    alt="vector"
                    height={500}
                    width={500}
                    className="max-w-[400px] object-contain"
                />
            </div>
            <SignUpForm />
        </div>
    );
}
