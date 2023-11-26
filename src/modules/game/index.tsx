import { getDetailGame } from "@/api/game";
import { useLoading } from "@/components/Loading/LoadingProvider";
import useBoundStore from "@/store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function GameDetail() {
  const user = useBoundStore((state) => state.user);
  let { gameid } = useParams();

  const loading = useLoading();

  const fetch = async () => {
    loading.toggleLoading(true);
    const list = await getDetailGame(gameid || '');
    loading.toggleLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  return <main></main>;
}
