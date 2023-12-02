import useBoundStore from "@/store";

export default function Table() {
  const game = useBoundStore((state) => state.game);

  return (
    <div>
      {game?.usedCards && Array.isArray(game.usedCards) && game.usedCards.length}
    </div>
  );
}
