import Image from "next/image";
import vector from "@/../public/images/auth-vector.png";
import SignUpForm from "@/components/signup/signup-form";

export default function SignUpPage() {
    return (
        <div className="grid md:grid-cols-2 gap-10 md:gap-0 ">
            <div className="grid place-items-center">
                <Image
                    src={vector}
                    alt="vector"
                    height={500}
                    width={500}
                    className="max-w-[500px]"
                />
            </div>
            <SignUpForm />
        </div>
    );
}
