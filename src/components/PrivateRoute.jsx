import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useSolana } from "../context/SolanaContext";
import { Loading } from "../Pages/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user } = useSolana();

  if (user == false) return <Navigate to={"/login"} />;
  if (user == "loading") return <Loading />;

  return children;
};

export default PrivateRoute;
