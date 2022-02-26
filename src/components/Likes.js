import { useState } from "react";
import Song from "./Song";
const Likes = () => {
  const [tracks, setTracks] = useState([
    {
      artist: "Jimi Hendrix",
      title: "Voodoo Child",
      image: "./hendrix.jfif",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
			artist: "Gregory Alan Isakov",
      title: "Astronaut",
      image: "./gregory.jpg",
    },
		{
			artist: "Bee Gees",
			title: "Stayin' Alive",
			image: "./bee.jpg",
		},
		{
			artist: "Ben Howard",
			title: "Promise",
			image: "./ben.png",
		},
		{
			artist: "Arctic Monkeys",
			title: "I Wanna Be Yours",
			image: "./arctic.jpg",
		},
		{
			artist: "Tame Impala",
			title: "Less I Know The Better",
			image: "./tame.png",
		},
		{
			artist: "Disclosure",
			title: "Help Me Lose My Mind",
			image: "./disclosure.png",
		}
		

  ]);

  return (
    <>
      <div className="flex flex-col items-start ml-5 mt-6">
        {/* Title */}
        <div className="flex flex-col ">
          <div className="flex justify-center">
            <div className="text-gray-400 text-sm">{tracks.length} Likes</div>
          </div>
        </div>

        {/* Tracks */}
        <div className="flex flex-col w-full">
          {tracks.map((track, index) => (
            <div className="my-4 h-[4em]">
              <Song key={index} track={track} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Likes;
