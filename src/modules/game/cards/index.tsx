import useBoundStore from "@/store";
import { useMemo } from "react";

export default function Cards() {
  const game = useBoundStore((state) => state.game);
  const user = useBoundStore((state) => state.user);

  const yourIndex = useMemo(() => {
    return game?.members.findIndex((mem) => mem.memberid._id == user?._id) || 0;
  }, [game, user]);

  const listCards = useMemo(() => {
    return (
      (game?.members[yourIndex] &&
        game.members[yourIndex].cards &&
        game.members[yourIndex].cards) ||
      []
    );
  }, [yourIndex]);

  return (
    <div>
      {listCards.map((card) => {
        return <div key={card}>{card}</div>;
      })}
    </div>
  );
}
