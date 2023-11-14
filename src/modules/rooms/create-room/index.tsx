import AddMember from "./AddMember";
import ChooseCard from "./ChooseCard";
import { RoomProvider } from "./RoomProvider";

export default function CreateRoom() {
  return (
    <RoomProvider>
      <div className="flex">
        <div className="flex-none mr-8">
          <AddMember />
        </div>
        <div className="grow">
          <ChooseCard />
        </div>
      </div>
    </RoomProvider>
  );
}
