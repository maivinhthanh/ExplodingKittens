import useBoundStore from "@/store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Seats from "./seats";
import Table from "./table";
import Cards from "./cards";

export default function GameDetail() {
  let { gameid } = useParams();
  const fetchGame = useBoundStore((state) => state.fetchGame);

  useEffect(() => {
    fetchGame(gameid || "");
  }, []);

  return (
    <main className="flex">
      <div className="grow flex flex-col">
        <div className="">
          <Seats />
        </div>
        <div className="">
          <Table />
        </div>
      </div>
      <div className="flex-none">
        <Cards />
      </div>
    </main>
  );
}
