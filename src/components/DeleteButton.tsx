import { IconContext } from "react-icons";
import { FaBan } from "react-icons/fa";

export const DeleteButton = ({ handleClick }: any) => {
  return (
    <button onClick={handleClick}>
      <IconContext.Provider value={{ className: "delete-button" }}>
        <FaBan />
      </IconContext.Provider>
    </button>
  );
};
