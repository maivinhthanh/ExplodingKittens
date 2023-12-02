import { createNewGame } from "@/api/game";
import {
  MemberGameParam,
  ParamCreateNewGame,
} from "@/api/game/type";
import { getDetailRoom } from "@/api/room";
import { IUserRoom } from "@/api/room/type";
import Paw from "@/assets/icons/Paw";
import { socket } from "@/socket";
import useBoundStore from "@/store";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function RoomDetail() {
  const navigate = useNavigate();
  let { roomid } = useParams();

  const [members, setMember] = useState<IUserRoom[]>([]);
  const [isShowBtnReady, setIsShowBtnReady] = useState<boolean>(true);

  const user = useBoundStore((state) => state.user);

  const getRoom = async () => {
    if (!roomid) return;
    const data = (await getDetailRoom(roomid)).members;
    setMember(data);
  };

  useEffect(() => {
    getRoom();
    socket.emit("joinRoom", { roomid, userid: user?._id });
  }, []);

  const isAllMemberIsReady = useMemo(() => {
    if (members.length > 0)
      return (
        members.every((mem) => mem.isAlive) && user?._id === members[0]._id
      );
    return false;
  }, [members]);

  socket.on("confirmOnline", (userid: string) => {
    const newList = members.map((mem) => {
      if (mem._id !== userid) return mem;
      return {
        ...mem,
        isOnline: true,
      } as IUserRoom;
    });
    setMember(newList);
  });
  socket.on("confirmJoinRoom", (userid: string) => {
    const newList = members.map((mem) => {
      if (mem._id !== userid) return mem;
      setIsShowBtnReady(true);
      return {
        ...mem,
        isAlive: true,
      } as IUserRoom;
    });
    setMember(newList);
  });

  const getReady = () => {
    socket.emit("getReady", { roomid, userid: user?._id });
  };

  const startGame = async () => {
    const listIdMember: Array<MemberGameParam> = members.map((mem) => {
      return {
        memberid: mem._id,
        isAlive: mem.isOnline ? mem.isAlive : false,
        isOnline: mem.isOnline,
        cards: ["DEFUSE"],
      } as MemberGameParam;
    });
    const param: ParamCreateNewGame = {
      members: listIdMember,
      room: roomid || "",
    };
    const game = await createNewGame(param);
    socket.emit("startGame", { roomid, gameid: game?._id });
  };

  socket.on("onGame", (gameid: string) => {
    navigate("/game/" + gameid);
  });

  return (
    <div>
      <h6 className="">Vào game</h6>
      <div className="grid grid-rows-2 grid-flow-col gap-4">
        {members.map((mem) => {
          return (
            <div key={mem._id}>
              <div className="avatar-sm relative">
                {mem.isAlive && (
                  <div className="badge text-xs bg-blue-500 -end-8">
                    <span className="mr-2">Meow</span> <Paw />
                  </div>
                )}
              </div>
              <p>{mem.name}</p>
            </div>
          );
        })}
      </div>
      <div>
        {isShowBtnReady && (
          <button className="button button-primary" onClick={getReady}>
            Tôi sẵn sàng vào game
          </button>
        )}
      </div>
      <div>
        {isAllMemberIsReady && (
          <button className="button button-primary" onClick={startGame}>
            Bắt đầu game
          </button>
        )}
      </div>
    </div>
  );
}
