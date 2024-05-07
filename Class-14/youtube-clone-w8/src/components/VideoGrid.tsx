import VideoCard from "./VideoCard";

const VIDEOS = [
    {
        thumbnail: "/thumbnail.png",
        channelLogo: "/channel.jpeg",
        title: "Live like a 40 year-old in your 20's | 1M",
        channel: "1M",
        views: "294K",
        timestamp: "3 months ago"
    },
    {
        thumbnail: "/thumbnail.png",
        channelLogo: "/channel.jpeg",
        title: "Not the same video",
        channel: "1M",
        views: "294K",
        timestamp: "3 months ago"
    },
    {
        thumbnail: "/thumbnail.png",
        channelLogo: "/channel.jpeg",
        title: "I assure you this is a new video",
        channel: "1M",
        views: "294K",
        timestamp: "3 months ago"
    },
    {
        thumbnail: "/thumbnail.png",
        channelLogo: "/channel.jpeg",
        title: "I assure you this is a new video",
        channel: "1M",
        views: "294K",
        timestamp: "3 months ago"
    },
    {
        thumbnail: "/thumbnail.png",
        channelLogo: "/channel.jpeg",
        title: "I assure you this is a new video",
        channel: "1M",
        views: "294K",
        timestamp: "3 months ago"
    },
    {
        thumbnail: "/thumbnail.png",
        channelLogo: "/channel.jpeg",
        title: "I assure you this is a new video",
        channel: "1M",
        views: "294K",
        timestamp: "3 months ago"
    },
]

const VideoGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {VIDEOS.map((video) => {
                return (
                    <VideoCard 
                        thumbnail={video.thumbnail}
                        channelLogo={video.channelLogo}
                        title={video.title}
                        channel={video.channel}
                        views={video.views}
                        timestamp={video.timestamp}
                    />
                )
            })}
        </div>
    )
}

export default VideoGrid;