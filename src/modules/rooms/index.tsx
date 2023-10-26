import { getListMyRoom } from "@/api/room";
import { IRoom } from "@/api/room/type";
import { CLASS } from "@/lib/constants";
import useBoundStore from "@/store";
import { useEffect, useState } from "react";
import Room from "./Room";
import { useLoading } from "@/components/Loading/LoadingProvider";
import CreateRoomCard from "./create-room/Card";
import QuickStartCard from "./quick-start/Card";

export default function Rooms() {
  const user = useBoundStore((state) => state.user);
  const [rooms, setRooms] = useState<IRoom[]>([]);

  const loading = useLoading();

  const fetch = async () => {
    if (user?.class === CLASS.PREMIUM) {
      loading.toggleLoading(true);
      const list = await getListMyRoom();
      setRooms(list);
      loading.toggleLoading(false);
    }
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
    </main>
  );
}
