import { useNavigate } from "react-router-dom";

export default function QuickStartCard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/quick-start");
  };
  return (
    <div className="h-40 w-72 ml-12" onClick={handleClick}>
      <div className="h-full w-full rounded-xl bg-amber-300 hover:bg-amber-200 shadow-lg hover:animate-wiggle hover:animate-infinite hover:animate-ease-linear">
        <div className="p-4 flex flex-col h-full half-arc bg-gradient-to-tr from-amber-300 to-amber-500 hover:clip-path-lg ease-in duration-300 rounded-xl items-center">
          <div className="grow text-xl font-bold self-center">
            Vào game
          </div>
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              fill="currentColor"
              className="bi bi-lightning-charge"
              viewBox="0 0 16 16"
            >
              <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
