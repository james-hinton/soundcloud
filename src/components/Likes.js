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
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
		{
			artist: "Bee Gees",
			title: "Stayin' Alive",
			image: "./bee.jpg",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		},
		{
			artist: "Ben Howard",
			title: "Promise",
			image: "./ben.png",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		},
		{
			artist: "Arctic Monkeys",
			title: "I Wanna Be Yours",
			image: "./arctic.jpg",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		},
		{
			artist: "Tame Impala",
			title: "Less I Know The Better",
			image: "./tame.png",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		},
		{
			artist: "Disclosure",
			title: "Help Me Lose My Mind",
			image: "./disclosure.png",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		},
		

  ]);

  return (
    <>
      <div className="flex flex-col items-start ml-5 mt-6">
        {/* Title */}
        <div className="flex flex-col ">
          <div className="flex justify-center">
            <div className="text-gray-400 text-sm flex items-center">
              <img src="./heart.svg" alt="heart" className="w-4 h-4 mr-2" />
              {tracks.length} Likes</div>
          </div>
        </div>

        {/* Tracks */}
        <div className="flex flex-col w-full">
          {tracks.map((track, index) => (
            <div key={'song-'+index} className="my-4 h-[4em]">
              <Song  track={track} hover />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Likes;
