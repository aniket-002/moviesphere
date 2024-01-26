import React, { useEffect, useState } from "react";
import { API_OPTIONS, MOVIE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPlayingVideo } from "../utils/moviesSlice";


const PlayingVideo = () => {
  const [video, setVideo] = useState(null);
  const movieId = useSelector((store) => store.movies.playingVideo);
  const dispatch = useDispatch();

  const onCloseButtonClick = () => {
    dispatch(addPlayingVideo(null));
  };

  const getMovieVideo = async () => {
    const url = MOVIE_URL + movieId + "/videos?language=en-US";
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type == "Trailer");
    const video = filterData.length ? filterData[0] : json.results[0];
    setVideo(video);
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
  return (
    <div className="fixed bg-black">
      <div className="text-center">
      <button
    className="opacity-30 text-2xl absolute pt-5 md:pt-12 text-center text-white cursor-pointer left-0 top-6 md:top-10 ml-4 md:ml-6"
    onClick={onCloseButtonClick}
  >
          🔙
        </button>
      </div>
      <div className="w-screen aspect-video">
        <iframe
          className="w-screen h-screen aspect-video"
          src={`https://www.youtube.com/embed/${video?.key}?&autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

      </div>

    </div>
  );
};

export default PlayingVideo;