import React, { useState, useEffect } from "react";

function VideoPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (!window.YT) {
            const tag = document.createElement("script");
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName("script")[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
        window.onYouTubeIframeAPIReady = () => {
            new window.YT.Player("youtube-player", {
                events: {
                    onStateChange: (event) => {
                        // 1 = PLAYING, 2 = PAUSED
                        if (event.data === 1) {
                            setIsPlaying(true);
                        } else if (event.data === 2) {
                            setIsPlaying(false);
                        }
                    },
                },
            });
        };
    }, []);

    return (
        <div className="flex flex-col w-full max-w-3xl mx-auto p-10 justify-center items-center">
            <div className="w-40 md:w-60 h-auto">
                <img
                    src={isPlaying ? "/raton.png" : "/raton-dormido.png"}
                    alt={isPlaying ? "Personaje activo" : "Personaje dormido"}
                    className="w-full transition-all duration-700 ease-in-out transform"
                />
            </div>

            <iframe
                id="youtube-player"
                className="w-full h-64 md:h-96 z-0 hover:scale-101 duration-300 ease-in-out"
                style={{
                    boxShadow: "0px 0px 50px rgba(255, 215, 0, 0.5)"
                }}
                src="https://www.youtube.com/embed/V-kPTOcTLYg?enablejsapi=1"
                title="YouTube Video"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default VideoPlayer;
