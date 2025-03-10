import React from "react";

function VideoPlayer() {
  return (
    <div className="h-screen w-screen flex justify-center items-center mb-16">
      <div className="h-[60%] md:h-[97%] w-[97%] ">
        <video
          className="
        w-full h-full object-cover rounded-md"
          controls
          muted
          autoPlay
          loop
        >
          <source src="/Shop-Video.mp4" type="video/mp4" />
          <track
            src="/Shop-Video.mp4"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
        </video>
      </div>
    </div>
  );
}

export default VideoPlayer;
