import { useLogin } from "@/api-services/userApi";
import { selectAuth } from "@/redux/features/authSlice";
import { useAppSelector } from "@/redux/hook";
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import { z } from "zod";
import { Button } from "../ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

export default function LoginForm() {
    const auth = useAppSelector(selectAuth);
    console.log(auth);

    const { loginUser, isPending } = useLogin();
    const form = useForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const handleLogin = (values: z.infer<typeof LoginSchema>) => {
        loginUser(values);
    };
    return (
        <div className="my-auto">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleLogin)}
                    className="space-y-6 max-w-[400px] border shadow-md p-6 rounded-lg mx-auto"
                >
                    <h2 className="text-2xl text-center text-orange-500 font-bold">
                        Login
                    </h2>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="user@example.com"
                                        {...field}
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
                                        type="password"
                                        placeholder="user@example.com"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full ">
                        {isPending && (
                            <FaSpinner className="animate-spin mr-2" />
                        )}
                        Login
                    </Button>

                    <p className="text-center text-muted-foreground text-sm">
                        New to QuickCrave?{" "}
                        <Link href="/sign-up">
                            <Button variant="link" className="p-0">
                                Sign up
                            </Button>
                        </Link>
                    </p>
                </form>
            </Form>
        </div>
    );
}
