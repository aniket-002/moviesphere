import { useDispatch } from "react-redux";
import { addPlayingVideo } from "../utils/moviesSlice";

const VideoTitle = ({ movieId, title, overview }) => {
  const dispatch = useDispatch();
  const handleOnclick = () => {
    dispatch(addPlayingVideo(movieId));
  };
  return (
    <div className="w-screen aspect-video pt-[24%] md:pt-[12%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="md:text-3xl pt-40 font-bold w-1/2 md:w-1/4">{title}</h1>
      <p className="hidden md:inline-block py-4 md:text-lg w-1/4">{overview}</p>
      <div>
        <button
          className="text-white bg-gradient-to-r from-black-500 via-blue-500 to-white-500 py:1 md:py-2 px-5 md:px-10 rounded-sm md:rounded-lg md:text-lg hover:bg-opacity-80"
          onClick={handleOnclick}
        >
          Play
        </button>
        <button className="hidden md:inline-block text-white bg-gradient-to-r from-black-500 via-blue-500 to-white-500 py-2 px-5 mx-2 bg-opacity-50 rounded-lg text-lg hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;