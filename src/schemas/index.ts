import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required",
    }),
    password: z.string().min(1, { message: "Password is required" }),
});

export const SignUpSchema = z.object({
    email: z.string().email({
        message: "Email is required",
    }),
    password: z.string().min(6, { message: "Minimum six characters required" }),
    name: z.string().min(1, { message: "Name is required" }),
    address: z.string().min(1, { message: "Address is required" }),
    city: z.string(),
    photo: z.string(),
    country: z.string(),
});
