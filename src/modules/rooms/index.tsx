import { getListMyRoom } from "@/api/room";
import { IRoom } from "@/api/room/type";
import { CLASS } from "@/lib/constants";
import useBoundStore from "@/store";
import { useEffect, useState } from "react";
import Room from "./Room";
import { useLoading } from "@/components/Loading/LoadingProvider";

export default function Rooms() {
  const user = useBoundStore((state) => state.user);
  const [rooms, setRooms] = useState<IRoom[]>([]);

  const loading = useLoading();

  const fetch = async () => {
    loading.toggleLoading(true);
    if (user?.class === CLASS.PREMIUM) {
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
        {user?.class === CLASS.PREMIUM && <div>Create New Room</div>}
        <div>Quick Start</div>
      </div>
      <div className="flex justify-center">
        {rooms.length > 0 &&
          rooms.map((room) => {
            return <Room room={room} key={room._id}></Room>;
          })}
      </div>
    </main>
  );
}
