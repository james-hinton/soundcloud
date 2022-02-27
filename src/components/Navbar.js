const Navbar = () => {
  return (
    <div className="bg-sc-gray flex justify-center min-w-[1200px]">
      <div className="w-[100%] max-w-[1200px] w-[1200px] flex bg-sc-gray h-11 text-sm w-90 md:w-100">
        
        {/* Logo */}
        <div className="logo min-w-max ml-10">
          <img className="h-full" src="./logo.jpg" />
        </div>

        {/* Left Navigation Buttons */}
        {["Home", "Stream", "Library"].map((item, index) => (
          <div key={index} className="border-r-2 border-r-black px-10 py-3 ">
            <h4 className="text-gray-300 cursor-pointer hover:text-gray-100">{item}</h4>
          </div>
        ))}

        {/* Search box */}
        <div className="flex-1 flex p-2 w-100 ">
          <div className="relative w-[100%] ">
            <input
              className="h-7 bg-gray-200 w-[100%] focus:outline-none focus:shadow-outline border border-black-300 rounded-lg py-2 px-4 block"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right Navigation Buttons */}
        {[
          { text: "Try Pro" },
          { text: "Upload" },
          { image: "./user.jpg", dropdown: true, rounded: true },
          { image: "./bell.svg" },
          { image: "./mailbox.svg" },
          { image: "./more.svg" },
        ].map((item, index) => (
          <div key={index} className={"px-4 py-3 flex items-center min-w-max hover:bg-gray-600 "}>
            {item.image ? (
              <img className={"w-5 max-h-4 object-contain" + (item.rounded===true && " rounded-full object-cover")} src={item.image} />
            ) : (
              <h4 className="text-gray-300">{item.text}</h4>
            )}
            {item.dropdown ? (
              <div className="absolute right-0 mt-2"></div>
            ) : (
              <div></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
