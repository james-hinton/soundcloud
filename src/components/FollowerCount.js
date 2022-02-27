import { useState } from "react";
import { titleCase } from "../utils/utils";

const FollowerCount = ({tracks}) => {

  const [followerData, setFollowerData] = useState({
    followers: Math.floor(Math.random() * 1000 + 100),
    following: Math.floor(Math.random() * 1000 + 100),
    tracks: tracks.length,
  });

  return (
    <>
      <div className="flex flex-row">
        {Object.keys(followerData).map((key, index) => (
          <div key={index} className="flex flex-col w-1/3">
            <div className="flex items-center px-5">
              <h4 className="text-gray-400 text-xs hover:font-bold">
                {titleCase(key)}
              </h4>
            </div>
            <div className="flex items-center px-5 ">
              <h4 className="text-gray-400 text-xl hover:font-bold">
                {followerData[key]}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FollowerCount;
