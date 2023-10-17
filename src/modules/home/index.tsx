import { socket } from "@/socket";
import useBoundStore from "@/store";
import { useEffect, useState } from "react";

export default function Home() {
  const fishes = useBoundStore((state) => state.fishes);
  const addFish = useBoundStore((state) => state.addFish);

  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState<string[]>([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value: string) {
      setFooEvents((previous: any) => [...previous, value]);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("foo", onFooEvent);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("foo", onFooEvent);
    };
  }, []);

  const connect = () => {
    socket.connect();
  };

  const disconnect = () => {
    socket.disconnect();
  };

  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    socket.timeout(5000).emit("create-something", value, () => {
      setIsLoading(false);
    });
  };

  return (
    <>
      <div className="App">
        {fishes}
        <p>fishes: {fishes}</p>;<button onClick={addFish}>addFish</button>
        <p>State: {"" + isConnected}</p>;
        <ul>
          {fooEvents.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
        <button onClick={connect}>Connect</button>
        <button onClick={disconnect}>Disconnect</button>
        <form onSubmit={onSubmit}>
          <input onChange={(e) => setValue(e.target.value)} />
          <button type="submit" disabled={isLoading}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
