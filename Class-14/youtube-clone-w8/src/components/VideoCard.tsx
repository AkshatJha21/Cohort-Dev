function VideoCard(props: any) {
    return (
        <div className="p-3">
            <img className="rounded-xl" src={props.thumbnail} alt="Thumbnail" />
            <div className="grid grid-cols-12 pt-2">
                <div className="col-span-1">
                    <img className="rounded-full h-12 aspect-square" src={props.channelLogo} alt="channel" />
                </div>
                <div className="col-span-11 pl-2">
                    <div className="font-semibold text-lg">
                        {props.title}
                    </div>
                    <div className="col-span-11 text-gray-500 text-base">
                        {props.channel}
                    </div>
                    <div className="col-span-11 text-gray-500 text-base">
                        {props.views} views | {props.timestamp}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;