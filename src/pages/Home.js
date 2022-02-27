import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import ProfileMenu from "../components/ProfileMenu";
import Songs from "../components/Songs";
import AccountDetails from "../components/AccountDetails";
import { useState } from "react";

const Home = () => {
  const [tracks, setTracks] = useState([
    {
      title: "Skitz",
      song: "./skitz.mp3",
      image: "./skitz.jpg",
      description: "Drum & Bass",
    },
    {
      title: "Dream",
      song: "./dream.mp3",
      image: "./dream.jpg",
      description: "Jazzy song",
    },
  ]);

  return (
    <div className=" bg-sc-background min-h-[100vh] bg-sc-background min-w-[1200px] ">
      <Navbar />

      <div className="flex justify-center  ">
        <div className="w-[100%] max-w-[1200px] bg-white">
          <Profile />
          <ProfileMenu />

          {/* Left side 66% */}
          <div className="flex mt-4">
            <div className="flex flex-col w-4/6">
              <Songs tracks={tracks} />
            </div>

            {/* Right side 33% with left border */}
            <div className="flex flex-col w-2/6 p-4 border-l-[0.5px] ">
              <AccountDetails tracks={tracks} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
