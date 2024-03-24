import DownloadAppSection from "@/components/home/download-app-section";
import HeroV2 from "@/components/home/hero-new";
import SearchCard from "@/components/home/search-card";

export default function Home() {
    return (
        <main>
            <HeroV2 />
            <div className="flex flex-col gap-12">
                <SearchCard />
                <DownloadAppSection />
            </div>
        </main>
    );
}
