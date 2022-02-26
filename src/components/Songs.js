import { useState } from "react";
import Song from "./Song";

const Songs = ({ tracks }) => {
  return (
    <>
      <div className="flex flex-col">
        {/* Title */}
        <div className="flex items-center px-5 py-3 border-b-[0.5px] mr-2 border-b-black-300">
          <h4 className="text-gray-800  text-xl">Songs</h4>
        </div>

        {tracks.map((track, index) => (
          <div className="p-6">
            <Song key={index} track={track} large />
          </div>
        ))}
      </div>
    </>
  );
};

export default Songs;
