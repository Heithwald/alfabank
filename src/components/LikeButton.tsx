import { IconContext } from "react-icons";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export const LikeButton = ({ isLiked, handleClick }: any) => {
  return (
    <button
      onClick={(event) => {
        handleClick(event);
      }}
    >
      {isLiked ? (
        <IconContext.Provider
          value={{ className: "like-button like-button--liked" }}
        >
          <FaHeart />
        </IconContext.Provider>
      ) : (
        <IconContext.Provider value={{ className: "like-button" }}>
          <FaRegHeart />
        </IconContext.Provider>
      )}
    </button>
  );
};
