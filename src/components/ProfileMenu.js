const ProfileMenu = () => {
  const menuItems = [
    "All",
    "Popular tracks",
    "Tracks",
    "Albums",
    "Playlists",
    "Reposts",
  ];

  return (
    <>
      <div className="flex border-b-[1.1px] m-1 border-b-black-300">
        {menuItems.map((item, index) => (
          <div
            key={"profile-" + index}
            className="cursor-pointer flex items-center px-5 py-3 "
          >
            <p
              className={"text-gray-800 font-semibold hover:font-bold" + (index === 0 ? " profile-menu-item-active" : "")}
              onClick={(e) => {
                document
                  .querySelectorAll(".profile-menu-item-active")
                  .forEach((el) => {
                    el.classList.remove("profile-menu-item-active");
                  });
                e.target.classList.add("profile-menu-item-active");
              }}
            >
              {item}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProfileMenu;
