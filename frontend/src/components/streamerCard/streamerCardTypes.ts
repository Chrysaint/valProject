export type StreamerCardProps = {
    streamer: string;
    icon: string;
    link: string;
    style: StreamerCardStyle.normalText | StreamerCardStyle.strokeText;
}

export enum StreamerCardStyle {
    normalText,
    strokeText
}