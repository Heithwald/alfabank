import { useState } from "react";
import { Card } from "./Card";

export const CardList = ({ data }: any) => {
  // Filter state
  const [filtered, setFiltered] = useState(false);

  // Returns untouched data/filtered by isLiked, based on filter state
  const dataBasedOnFilter = (filter: boolean) => {
    return filter === false
      ? data
      : data.filter((character: any) => character.isLiked);
  };

  return (
    <div className="flex-dc">
      <button className="liked-filter" onClick={() => setFiltered(!filtered)}>
        Filter
      </button>
      <div className="card-list">
        {dataBasedOnFilter(filtered).map((character: any) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};
