"use client";

import { SignUpSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "./form-error";
import { useSignUp } from "@/api-services/userApi";
import { FaSpinner } from "react-icons/fa";

export default function SignUpForm() {
    const { createUser, isError, isSuccess, isPending } = useSignUp();

    const form = useForm<z.infer<typeof SignUpSchema>>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            address: "",
            city: "Dhaka",
            photo: "",
            country: "Bangladesh",
        },
    });

    const handleSignUp = (values: z.infer<typeof SignUpSchema>) => {
        const res = createUser(values);
        console.log({ res });
    };
    return (
        <div className="">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSignUp)}
                    className="space-y-6 max-w-[400px] border shadow-md p-6 rounded-lg mx-auto"
                >
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="John Doe"
                                            {...field}
                                            type="text"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="john.doe@example.com"
                                            {...field}
                                            type="email"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="******"
                                            {...field}
                                            type="password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Address</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Dhaka, Bangladesh"
                                            {...field}
                                            type="text"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormError message={""} />
                    <Button type="submit" className="w-full">
                        {isPending && (
                            <FaSpinner className="animate-spin mr-2" />
                        )}
                        Sign Up
                    </Button>
                </form>
            </Form>
        </div>
    );
}
