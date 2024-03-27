"use client";
import vector from "@/../public/images/auth-vector.png";
import LoginForm from "@/components/login/login-form";
import Image from "next/image";

export default function LoginPage() {
    return (
        <div className="grid lg:grid-cols-2 gap-10 md:gap-0   min-h-[70vh]">
            <div className="grid place-items-center ">
                <Image
                    src={vector}
                    alt="vector"
                    height={500}
                    width={500}
                    className="max-w-[400px] object-contain"
                />
            </div>
            <LoginForm />
        </div>
    );
}
