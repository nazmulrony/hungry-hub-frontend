import DownloadAppSection from "@/components/home/download-app-section";
import Hero from "@/components/home/hero";
import SearchCard from "@/components/home/search-card";

export default function Home() {
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
