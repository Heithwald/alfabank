export const CharacterAbilities = ({ characterAbilities }: any) => {
  return (
    <ul className="character-abilities">
      {characterAbilities.length
        ? characterAbilities
            .slice(0, 3)
            .map((ability: string, index: string) => (
              <li key={index} className="character-ability">
                {ability}
              </li>
            ))
        : "-"}
    </ul>
  );
};
