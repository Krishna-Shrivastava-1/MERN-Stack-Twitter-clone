import React, { useEffect, useRef, useState } from 'react'
import myim from '../../assets/myim.png'
import blutick from '../../assets/bluetick.png'
import netflix from '../../assets/trailo2.mp4'
import { IoPlay } from "react-icons/io5";
import { MdPause } from "react-icons/md";
import { MdFullscreen } from "react-icons/md";
import { IoVolumeHighOutline } from "react-icons/io5";
import { IoVolumeMuteOutline } from 'react-icons/io5';
const Postsection = ({videor, twit,linku}) => {
    const videoRef = useRef(null);  // video element ko reference dena
    const [isPlaying, setIsPlaying] = useState(false); // Play/Pause state
    const [currentTime, setCurrentTime] = useState(0);  // Current time of the video
    const [duration, setDuration] = useState(0);  // Total duration of the video
    const [volume, setVolume] = useState(1); // Volume (default: max)
    const [isMuted, setIsMuted] = useState(false); // Mute state
    const [isFullscreen, setIsFullscreen] = useState(false); // Fullscreen state
    // const trailordata =[{id:1 ,video:netflix ,twit :'This is my Netflix vlone with HTML, CSS and JS and now I have created this clone again but with React js and that is why I am very happy to show you this clone.'},
    //     {id:2 ,video:netflix ,twit :'This is my Netflix vlone with HTML, CSS and JS and now I have created this clone again but with React js and that is why I am very happy to show you this clone.'},
    //     {id:3 ,video:netflix ,twit :'This is my Netflix vlone with HTML, CSS and JS and now I have created this clone again but with React js and that is why I am very happy to show you this clone.'}
    // ]

    useEffect(() => {
        // Update current time of video when playing
        const interval = setInterval(() => {
            if (videoRef.current) {
                setCurrentTime(videoRef.current.currentTime);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const togglePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleSeek = (e) => {
        const seekTime = (e.target.value / 100) * duration;
        videoRef.current.currentTime = seekTime;
        setCurrentTime(seekTime);
    };

    const handleVolume = (e) => {
        const volumeLevel = e.target.value / 100;
        videoRef.current.volume = volumeLevel;
        setVolume(volumeLevel);
    };

    const toggleMute = () => {
        if (isMuted) {
            videoRef.current.volume = volume;
            setIsMuted(false);
        } else {
            videoRef.current.volume = 0;
            setIsMuted(true);
        }
    };

    const toggleFullscreen = () => {
        if (!isFullscreen) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            } else if (videoRef.current.mozRequestFullScreen) {
                videoRef.current.mozRequestFullScreen();
            } else if (videoRef.current.webkitRequestFullscreen) {
                videoRef.current.webkitRequestFullscreen();
            } else if (videoRef.current.msRequestFullscreen) {
                videoRef.current.msRequestFullscreen();
            }
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    const onLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };
    const handleScroll = () => {
        const video = videoRef.current;
        if (video) {
          const videoTop = video.getBoundingClientRect().top; // Get top position of video
          const videoBottom = video.getBoundingClientRect().bottom; // Get bottom position of video
    
          if (videoTop < 0 || videoBottom > window.innerHeight) {
            // If video is out of view (above screen or below screen), pause it
            if (!video.paused) {
              video.pause();
              setIsPlaying(false);
            }
          } else {
            // If video is in view, play it
            if (video.paused) {
              video.play();
              setIsPlaying(true);
            }
          }
        }
      };
    
      // Add event listener for scroll
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
     
    return (
        <div>
            <div className='flex flex-col   hover:bg-[#27272a52] p-3 border-b-[0.5px] border-zinc-700 px-4' >
                <div className='flex items-center justify-start gap-2 flex-wrap'  >
                    <img className='w-16 h-16 rounded-full' src={myim} alt="" />
                    <h3><h3 className='text-white hover:underline' >Krishna Shrivastava</h3>
                        <p className='text-zinc-700' >@Webdeveloper</p>
                    </h3>
                    
                    
                    <img className='w-10 h-10 rounded-full' src={blutick} alt="" />
                </div>

                <div className='m-2' >
                   <p className='text-white my-4' > {twit}  <a className='text-sky-600' target='_blank' href={linku}><p>{linku}</p></a></p>
                  

                    <div className="relative group">
                        {
                            location.pathname != '/education' ?  <video
                            controls={false}

                            onClick={togglePlayPause}
                            className="rounded-xl border-2 border-zinc-700"
                            ref={videoRef}
                            src={videor}
                            onLoadedMetadata={onLoadedMetadata}
                        ></video> : null
                        }
                       

                        <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 hidden group-hover:block rounded-xl">
                            <div className="flex items-center justify-between">
                                {/* Play/Pause Button */}
                                <div onClick={togglePlayPause} className="cursor-pointer">
                                    {isPlaying ? (
                                        <MdPause className="text-white text-4xl hover:bg-zinc-800 rounded-full p-2" />
                                    ) : (
                                        <IoPlay className="text-white text-4xl hover:bg-zinc-800 rounded-full p-2 " />
                                    )}
                                </div>

                                {/* Seek Bar */}
                                <input
                                    type="range"
                                    className="w-full mx-2 cursor-pointer "
                                    min="0"
                                    max="100"
                                    value={(currentTime / duration) * 100}
                                    onChange={handleSeek}
                                />
                                <span className="text-white text-nowrap mx-4">{Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60)} / {Math.floor(duration / 60)}:{Math.floor(duration % 60)}</span>

                                {/* Volume Control */}
                                <div onClick={toggleMute} className="cursor-pointer">
                                    {isMuted ? (
                                        <IoVolumeMuteOutline className="text-white text-lg" />
                                    ) : (
                                        <IoVolumeHighOutline className="text-white text-lg" />
                                    )}
                                </div>
                                <input
                                    type="range"
                                    className="w-24"
                                    min="0"
                                    max="100"
                                    value={volume * 100}
                                    onChange={handleVolume}
                                />

                                {/* Fullscreen Button */}
                                <div onClick={toggleFullscreen} className="cursor-pointer">
                                    <MdFullscreen className="text-white text-lg" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Postsection
