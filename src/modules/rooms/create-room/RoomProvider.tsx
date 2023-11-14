import { IUser } from "@/api/auth/type";
import { createNewRoom } from "@/api/room";
import { ParamCreateNewRoom } from "@/api/room/type";
import { ReactNode, createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

type CardCount = {
  [key: string]: number;
};

export interface RoomContextProps {
  members: IUser[];
  addMember: (person: IUser) => void;
  removeMember: (id: string) => void;
  cards: CardCount;
  editCard: (code: string, count: number) => void;
  total: number;
  createRoom: (name: string) => void;
}

export const RoomContext = createContext<RoomContextProps>({
  members: [],
  addMember: () => {},
  removeMember: () => {},
  editCard: () => {},
  cards: {},
  total: 0,
  createRoom: () => {},
});

export interface RoomProviderProps {
  children: ReactNode;
}

export const RoomProvider: React.FC<RoomProviderProps> = ({ children }) => {
  const navigate = useNavigate();

  const [members, setMembers] = useState<IUser[]>([]);
  const [cards, setCard] = useState<CardCount>({});

  const addMember = (person: IUser) => {
    setMembers([...members, person]);
  };

  const removeMember = (id: string) => {
    const list = members.filter((e) => e._id !== id);
    setMembers(list);
  };

  const editCard = (code: string, count: number) => {
    setCard({ ...cards, [code]: count });
  };

  const total = useMemo(() => {
    return Object.keys(cards).reduce((previous, key) => {
      return previous + cards[key];
    }, 0);
  }, [cards]);

  const getIdMember = () => {
    return members.map((mem) => mem._id);
  };

  const getListCard = () => {
    const listCards: string[] = [];

    Object.keys(cards).map((card) => {
      const count = cards[card];
      for (let i = 0; i < count; i++) {
        listCards.push(card);
      }
    });

    return listCards;
  };

  const createRoom = (name: string) => {
    const params = {
      members: getIdMember(),
      cards: getListCard(),
      type: "PREMIUM",
      name,
    } as unknown as ParamCreateNewRoom;

    createNewRoom(params).then((data) => {
      navigate("/room/" + data._id);
    });
  };

  return (
    <RoomContext.Provider
      value={{
        members,
        addMember,
        removeMember,
        cards,
        editCard,
        total,
        createRoom,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export const useRoom = () => useContext(RoomContext);
