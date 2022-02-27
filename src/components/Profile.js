import { useState } from "react";

const Profile = () => {
  const [background, setBackground] = useState(
    "./profile-background-desert.jpg"
  );

  return (
    <div className="w-max bg-sc-gray flex justify-center relative">
      {/* Background */}
      <img className="h-80 min-w-[1200px] object-cover" src={background}></img>

      {/* Profile image over background */}
      <div className="absolute top-10 left-20 h-max text-white flex">
        {/* Profile image */}

        <img
          className="h-60 min-w-max object-contain rounded-full mr-8"
          src="./user.jfif"
        />

        {/* Profile name */}
        <div>
          <h1 className="text-2xl">
            <span className="text-gray-300">
              <h3 className="bg-gray-900 w-max p-2 mb-2  font-bold">
                James Hinton
              </h3>
              <h6 className="bg-gray-900 w-max p-1 text-sm mb-2">
                <a target="_blank" className="hover:font-bold hover:text-cyan-800" href="https://github.com/james-hinton">https://github.com/james-hinton</a>
              </h6>
              <h6 className="bg-gray-900 w-max p-1 text-sm">
                Reading, England
              </h6>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
