const Navbar = () => {
  return (
    <div className="w-100 bg-sc-gray flex justify-center">
      <div className="flex bg-sc-gray h-12 text-sm w-90">
        
        {/* Logo */}
        <div className="logo min-w-max ml-10">
          <img className="h-full" src="./logo.jpg" />
        </div>

        {/* Left Navigation Buttons */}
        {["Home", "Stream", "Library"].map((item, index) => (
          <div key={index} className="border-r-2 border-r-black px-10 py-3 ">
            <h4 className="text-gray-300">{item}</h4>
          </div>
        ))}

        {/* Search box */}
        <div className="flex-1 flex p-2 ">
          <div className="relative">
            <input
              className="h-8 bg-gray-200  focus:outline-none focus:shadow-outline border border-black-300 rounded-lg py-2 px-4 block"
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
          <div key={index} className=" px-4 py-3 flex items-center min-w-max hover:bg-gray-600 ">
            {item.image ? (
              <img className="w-5 max-h-4 rounded-full object-contain" src={item.image} />
            ) : (
              <h4 className="text-gray-300">{item.text}</h4>
            )}
            {item.dropdown ? (
              <div className="absolute right-0 mt-2">--</div>
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
