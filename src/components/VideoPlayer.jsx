import React from 'react'

function VideoPlayer() {
    return (
        <div>
            <div className="flex flex-col w-full max-w-3xl mx-auto p-13 justify-center align-center">
                <img
                    src="/raton-dormido.png"
                    alt="Personaje tumbado"
                    className="w-40 md:w-60"
                />
                <iframe
                    className="w-full h-64 md:h-96"
                    src="https://www.youtube.com/embed/6pbreU5ChmA"
                    title="YouTube Video"
                    allowFullScreen
                ></iframe>



            </div>

        </div>
    )
}

export default VideoPlayer
