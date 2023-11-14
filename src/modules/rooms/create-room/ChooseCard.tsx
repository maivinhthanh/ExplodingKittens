import { listCard } from "@/api/card";
import { ICard } from "@/api/card/type";
import { useEffect, useState } from "react";
import CardLimited from "./CardLimited";
import { useRoom } from "./RoomProvider";

export default function ChooseCard() {
  const [listcards, setListCards] = useState<ICard[]>([]);
  const [nameGroup, setNameGroup] = useState<string>("");
  const { total, createRoom } = useRoom();

  const fetch = async () => {
    const list = await listCard();
    setListCards(list);
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setNameGroup(inputValue);
  };

  useEffect(() => {
    fetch();
  }, []);
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto h-[calc(100vh-200px)] shadow-lg px-4 py-6 rounded-md bg-gradient-to-r from-red-500 to-pink-500">
        {listcards.map((card) => {
          return <CardLimited card={card} key={card.code} />;
        })}
      </div>
      <div className="">
        <h6>Tổng lá bài: {total}</h6>
        <input className="input my-4" value={nameGroup} onChange={handleChangeName} />
        <button
          className="button button-primary"
          onClick={() => createRoom(nameGroup)}
        >
          tạo nhóm
        </button>
      </div>
    </div>
  );
}
