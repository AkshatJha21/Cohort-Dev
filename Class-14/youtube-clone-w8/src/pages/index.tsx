import Image from "next/image";
import { Inter } from "next/font/google";
import VideoCard from "@/components/VideoCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <VideoCard 
        thumbnail="/thumbnail.png" 
        channelLogo="/channel.jpeg"
        title="Live like a 40 year-old in your 20's"
        channel="1M"
        views="294K"
        timestamp="3 months ago"
      />
    </div>
  );
}
