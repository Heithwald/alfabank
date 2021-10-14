// Component imports
import { useState } from "react";
import { LikeButton } from "./LikeButton";
import { DeleteButton } from "./DeleteButton";
import { CharacterAbilities } from "./CharacterAbilities";
// RTK imports
import { useDispatch } from "react-redux";
import {
  deleteElement,
  toggleLike,
} from "../features/dataFetch/dataFetchSlice";

export const Card = ({ character }: any) => {
  const [isLiked, setIsLiked] = useState(false); // Card's internal like state for like icon display logic
  const dispatch = useDispatch();

  const handleLike = (event: any) => {
    setIsLiked(!isLiked);
    dispatch(toggleLike(event.currentTarget.parentElement!.parentElement!.id));
  };

  const handleDelete = (event: any) => {
    if (window.confirm("Are you sure?")) {
      dispatch(
        deleteElement(event.currentTarget.parentElement!.parentElement!.id)
      );
    }
  };

  return (
    <div id={character.id} className="card-list__card">
      <img
        className="character-image"
        src={character.img_url}
        alt="character_image"
      />
      <div className="character-info">
        <h3 className="character-name">{character.name}</h3>
        <p className="character-origin">from {character.origin}</p>
        <h3 className="character-abilities__title">Abilities:</h3>
        <CharacterAbilities characterAbilities={character.abilities} />

        <LikeButton isLiked={isLiked} handleClick={handleLike} />
        <DeleteButton handleClick={handleDelete} />
      </div>
    </div>
  );
};
