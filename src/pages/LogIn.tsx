import { logIn, signUp } from "@/api/auth";
import CatTyping from "@/modules/login/CatTyping";
import useBoundStore from "@/store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [isLogIn, setIsLogIn] = useState<boolean>(true);

  const fetchUser = useBoundStore((state) => state.fetchUser);

  const handleSignIn = async () => {
    const data = { email, password, name };
    isLogIn ? await logIn(data) : await signUp(data);
    fetchUser();
    navigate("/");
  };

  const handleToggle = () => {
    setIsLogIn(!isLogIn);
  };


  return (
    <div className="w-screen h-screen bg-[url('/image/Background.webp')] bg-repeat bg-center flex">
      <div className="flex flex-col items-center justify-center p-24">
        <img src="/logo.png" alt="logo" />
        <h2 className="text-6xl pt-16">Exploding kittens</h2>
      </div>
      <div className="p-24 grow">
        <CatTyping />
        <div className="flex flex-col justify-center pt-80 items-center">
          <div className="flex flex-col	items-end gap-4">
            <div className="w-[40vw]">
              <label className="text-xl">Email:</label>
              <input
                className="block w-full bg-white focus:outline-none focus:shadow-outline 
                border border-gray-300 rounded-md py-3 px-3 block appearance-none 
                leading-normal focus:border-blue-400 text-black"
                type="email"
                value={email}
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {!isLogIn && (
              <div className="w-[40vw]">
                <label className="text-xl">Name:</label>
                <input
                  className="block w-full bg-white focus:outline-none focus:shadow-outline 
                border border-gray-300 rounded-md py-3 px-3 block appearance-none 
                leading-normal focus:border-blue-400 text-black"
                  type="name"
                  value={name}
                  name="name"
                  autoComplete="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
            <div className="w-[40vw]">
              <label className="text-xl">Password:</label>
              <input
                className="block w-full bg-white focus:outline-none focus:shadow-outline 
                border border-gray-300 rounded-md py-3 px-3 block appearance-none 
                leading-normal focus:border-blue-400 text-black"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between w-full">
              <a className="text-white cursor-pointer" onClick={handleToggle}>
                {isLogIn ? "Sign Up" : "Log In"}
              </a>
              <button className="bg-black" type="button" onClick={handleSignIn}>
                {!isLogIn ? "Sign Up" : "Log In"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
