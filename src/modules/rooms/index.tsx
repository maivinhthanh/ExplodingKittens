import { getListMyRoom } from "@/api/room";
import { IRoom } from "@/api/room/type";
import { CLASS } from "@/lib/constants";
import useBoundStore from "@/store";
import { useEffect, useState } from "react";
import Room from "./Room";
import { useLoading } from "@/components/Loading/LoadingProvider";
import CreateRoomCard from "./create-room/Card";
import QuickStartCard from "./quick-start/Card";
import { IGame } from "@/api/game/type";
import Game from "./Game";
import { getListMyGame } from "@/api/game";

export default function Rooms() {
  const user = useBoundStore((state) => state.user);
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [games, setGames] = useState<IGame[]>([]);

  const loading = useLoading();

  const fetch = async () => {
    loading.toggleLoading(true);
    if (user?.class === CLASS.PREMIUM) {
      const list = await getListMyRoom();
      setRooms(list);
    }
    const listGame = await getListMyGame();
    setGames(listGame);
    loading.toggleLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <main>
      <div className="flex justify-center">
        {user?.class === CLASS.PREMIUM && <CreateRoomCard />}
        <QuickStartCard />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
        {rooms.length > 0 &&
          rooms.map((room) => {
            return <Room room={room} key={room._id}></Room>;
          })}
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
        {games.length > 0 &&
          games.map((game) => {
            return <Game game={game} key={game._id}></Game>;
          })}
      </div>
    </main>
  );
}
