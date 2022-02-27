const Song = ({ track, large, hover }) => {
  return (
    <>
      <div className={"flex mr-2 bg-white p-2" + (hover ? ' hover:bg-gray-200 hover:font-bold' : '')}>
        {/* Image on left */}
        <div className="w-1/4 h-max">
          <img
            src={track.image}
            alt={track.title}
            onClick={() => {track.link && window.open(track.link)}}
            className={"h-[10em] rounded w-full object-cover" + (track.link ? " cursor-pointer" : "") + (!large ? " h-[5em]" : "")}
          />
        </div>

        {/* Song info on right */}
        <div className={"w-3/4" + (large ? " flex flex-col justify-center" : "")}>
          <div className="flex flex-col w-100">
            {/* Title */}
            <div className={"flex items-start flex-col  py-3 w-100" + (large && " px-5")}>
              <div className="flex flex-row mb-4">
                <div className="mr-4">
                {track.song && (
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-orange-500 text-white">
                    <p className={"text-xs"}>{track.title[0]}</p>
                  </div>
                )}
                </div>

                <div>
                  <h5 className="text-gray-400 text-sm">
                    {track.artist ? (track.artist) : ('James Hinton')}</h5>
                  <h4 className={"text-gray-800" + (large ? " text-xl" : " text-sm" )}>{track.title}</h4>
                </div>
              </div>

              {/* song */}
              {track.song && (
                <audio className="w-full" controls>
                  <source src={track.song} type="audio/mpeg" />
                </audio>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Song;
