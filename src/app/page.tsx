"use client";
import { useCreateCurrentUser } from "@/api-services/userApi";
import DownloadAppSection from "@/components/home/download-app-section";
import Hero from "@/components/home/hero";
import SearchCard from "@/components/home/search-card";
import { useUser } from "@auth0/nextjs-auth0/client";
import { getAccessToken } from "@auth0/nextjs-auth0";
import { useEffect, useRef } from "react";
import { PuffLoader } from "react-spinners";

export default function Home() {
    const { user, isLoading, error } = useUser();
    const { createUser } = useCreateCurrentUser();
    const hasCreatedUser = useRef(false);

    useEffect(() => {
        if (user?.email && user?.sub && !hasCreatedUser.current) {
            createUser({ auth0Id: user.sub, email: user.email });
            hasCreatedUser.current = true;
        }
    }, [createUser, user]);

    if (isLoading) {
        return (
            <div className="h-[80vh] grid place-items-center">
                <PuffLoader color="#F88340" />
            </div>
        );
    }
    return (
        <main>
            <Hero />
            <div className="flex flex-col gap-12">
                <SearchCard />
                <DownloadAppSection />
            </div>
        </main>
    );
}
