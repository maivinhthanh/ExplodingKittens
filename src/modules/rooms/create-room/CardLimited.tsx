import { ICard } from "@/api/card/type";
import { useRoom } from "./RoomProvider";

interface CardLimitedProps {
  card: ICard;
}

export default function CardLimited(data: CardLimitedProps) {
  const { editCard } = useRoom();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    editCard(data.card.code, Number.parseInt(e.target.value));
  };

  return (
    <div className="flex justify-between">
      <p className="font-medium">
        {data.card.name} {data.card.times && "x" + data.card.times}
      </p>
      <input
        type="number"
        max={data.card.limitted}
        min={0}
        className="py-1 px-2 block border-gray-200 rounded-md text-sm focus:border-blue-500 min-w-[60px]"
        onChange={handleChange}
      />
    </div>
  );
}
