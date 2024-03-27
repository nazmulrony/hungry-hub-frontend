import Axios from "@/axios-config";
import { LoginSchema, SignUpSchema } from "@/schemas";
import { getSession } from "@auth0/nextjs-auth0";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import { Router } from "next/router";
import { z } from "zod";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

type CreateUserRequest = {
    auth0Id: String;
    email: String;
};

export const useCreateCurrentUser = () => {
    const createCurrentUserRequest = async (user: CreateUserRequest) => {
        // const { accessToken } = await getAccessToken();
        const session = await getSession();
        console.log({ session });
        // console.log("User", user);
        const response = await fetch(`${BASE_URL}/users`, {
            method: "POST",
            headers: {
                // Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        console.log({ response });
        if (!response.ok) {
            throw new Error("Failed to create user");
        }
    };
    const {
        mutateAsync: createUser,
        isError,
        isSuccess,
        isPending,
    } = useMutation({ mutationFn: createCurrentUserRequest });

    return {
        createUser,
        isError,
        isPending,
        isSuccess,
    };
};

export const useSignUp = () => {
    const signUpRequest = async (user: z.infer<typeof SignUpSchema>) => {
        try {
            const response = await Axios.post("/users/signup", user);
            // console.log(response);
        } catch (error) {
            throw new Error("Failed to create user!");
        }
    };

    const {
        mutateAsync: createUser,
        isError,
        isSuccess,
        isPending,
    } = useMutation({ mutationFn: signUpRequest });

    return {
        createUser,
        isError,
        isPending,
        isSuccess,
    };
};

export const useLogin = () => {
    const signInRequest = async (credentials: z.infer<typeof LoginSchema>) => {
        try {
            const response = await Axios.post("/users/login", credentials, {});
            return response.data;
        } catch (error) {
            throw new Error("Failed to login user!");
        }
    };

    return useMutation({ mutationFn: signInRequest });
};
