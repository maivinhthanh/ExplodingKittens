import { ReactNode, createContext, useContext, useState } from "react";
import Loading from ".";

export interface LoadingContextProps {
  loading: boolean;
  toggleLoading: (value: boolean) => void;
}

export const LoadingContext = createContext<LoadingContextProps>({
  loading: false,
  toggleLoading: () => {},
});

export interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const toggleLoading = (value: boolean) => {
    setLoading(value);
  };

  return (
    <LoadingContext.Provider value={{ loading, toggleLoading }}>
      <div className="relative">
        {loading && <Loading></Loading>}
        {children}
      </div>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
