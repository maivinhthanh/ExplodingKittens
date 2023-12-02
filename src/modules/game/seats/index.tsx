import useBoundStore from "@/store";

export default function Seats() {
  const game = useBoundStore((state) => state.game);

  return (
    <div className="flex justify-around">
      {game?.members.map((mem) => {
        return (
          <div key={mem.memberid._id}>
            <div className="avatar-sm relative">
              {mem.isAlive && (
                <div className="badge text-xs bg-blue-500 -end-8">
                  <span className="">Meow</span>
                </div>
              )}
            </div>
            <p>{mem.memberid.name}</p>
          </div>
        );
      })}
    </div>
  );
}
