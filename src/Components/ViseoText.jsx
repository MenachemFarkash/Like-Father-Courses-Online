import video from '../Images/video.mp4';

const VideoTest = () => {
    return (
        <>
            <video width="800" controls>
                <source src={video} type="video/mp4"></source>
            </video>
        </>
    );
};

export default VideoTest;
