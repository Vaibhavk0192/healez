import { Navigate } from "react-router-dom";
import { useSolana } from "../context/SolanaContext";
import { Loading } from "../Pages/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user } = useSolana();

  if (user == "loading") return <Loading />;
  if (user) {
    return <Navigate to={"/"} />;
  }

  return children;
};

export default PrivateRoute;
