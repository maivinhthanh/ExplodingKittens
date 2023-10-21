import { IRoom } from "@/api/room/type";

interface RoomProps {
  room: IRoom;
}

export default function Room(data: RoomProps) {
  return (
    <div className="h-32 w-32">
      <div className="h-full w-full p-4 rounded-md bg-blue-300 hover:bg-blue-200 shadow-lg hover:animate-wiggle hover:animate-infinite hover:animate-ease-linear">
        {data.room.name}
      </div>
    </div>
  );
}
