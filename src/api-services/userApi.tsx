import { useMutation } from "@tanstack/react-query";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

type CreateUserRequest = {
    auth0Id: String;
    email: String;
};

export const useCreateCurrentUser = () => {
    const createCurrentUserRequest = async (user: CreateUserRequest) => {
        console.log("User", user);
        const response = await fetch(`${BASE_URL}/users`, {
            method: "POST",
            headers: {
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
