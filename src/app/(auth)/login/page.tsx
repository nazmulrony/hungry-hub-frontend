"use client";
import vector from "@/../public/images/auth-vector.png";
import LoginForm from "@/components/login/login-form";
import Image from "next/image";

export default function LoginPage() {
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
            <LoginForm />
        </div>
    );
}
