import { getDetailRoom } from "@/api/room";
import { RoomResponse } from "@/api/room/type";
import { socket } from "@/socket";
import useBoundStore from "@/store";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RoomDetail() {
  let { roomid } = useParams();
  const [info, setInfo] = useState<RoomResponse | null>(null);
  const user = useBoundStore((state) => state.user);

  const getRoom = async () => {
    if (!roomid) return;
    const data = await getDetailRoom(roomid);
    setInfo(data);
  };

  useEffect(() => {
    getRoom();
    socket.on("confirmJoinRoom", (message) => {
      console.log("Received message:", message);
    });
  }, []);

  const getReady = () => {
    socket.emit("joinRoom", { roomid, userid: user?._id }, (arg: string) => {
      console.log(arg);
    });
  };

  return (
    <div>
      <h6 className="">Vào game</h6>
      <div className="grid grid-rows-2 grid-flow-col gap-4">
        {info?.room.members.map((member) => {
          return (
            <div key={member._id}>
              <div className="avatar-sm relative">
                <div className="badge text-xs bg-blue-500 -end-8">
                  Tôi sẵn sàng
                </div>
              </div>
              <p>{member.name}</p>
            </div>
          );
        })}
      </div>
      <div>
        <button className="button button-primary" onClick={getReady}>
          Tôi sẵn sàng vào game
        </button>
      </div>
    </div>
  );
}
