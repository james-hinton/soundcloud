const Song = ({ track, large }) => {
  return (
    <>
      <div className="flex mr-2 bg-white ">
        {/* Image on left */}
        <div className="w-1/4 h-max">
          <img
            src={track.image}
            alt={track.title}
            onClick={() => {track.link && window.open(track.link)}}
            className={"h-max w-full object-cover" + (track.link ? " cursor-pointer" : "")}
          />
        </div>

        {/* Song info on right */}
        <div className="w-3/4">
          <div className="flex flex-col w-100">
            {/* Title */}
            <div className={"flex items-start flex-col mb-4 py-3 w-100" + (large && " px-5")}>
              <div className="flex flex-row mb-4">
                <div className="mr-4">
                {track.song && (
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-orange-500 text-white">
                    <p className="text-xs">{track.title[0]}</p>
                  </div>
                )}
                </div>

                <div>
                  <h5 className="text-gray-400 text-sm">
                    {track.artist ? (track.artist) : ('James Hinton')}</h5>
                  <h4 className={"text-gray-800" + (large ? " text-xl" : " text-sm")}>{track.title}</h4>
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
