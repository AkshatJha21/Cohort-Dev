function VideoCard() {
    return (
        <div>
            <img className="rounded-xl" src="/thumbnail.png" alt="Thumbnail" />
            <div className="grid grid-cols-12 pt-2">
                <div className="col-span-1">
                    <img className="rounded-full h-12 aspect-square" src="/channel.jpeg" alt="channel" />
                </div>
                <div className="col-span-11 pl-2">
                    <div className="">
                        Live like a 40 year-old in your 20's | 1M
                    </div>
                    <div className="col-span-11 text-gray-500 text-base">
                        1M
                    </div>
                    <div className="col-span-11 text-gray-500 text-base">
                        294K views | 1 month ago
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;