import AddMember from "./AddMember";

export default function CreateRoom() {
  return (
    <main>
      <div className="flex">
        <div className="flex-none">
          <AddMember />
        </div>
        <div className="grow"></div>
      </div>
    </main>
  );
}
