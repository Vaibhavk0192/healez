import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { getProgram, getUserAccountPk } from "../utils/program.js";

const SolanaContext = createContext();

export const useSolana = () => {
  const context = useContext(SolanaContext);
  if (context) return context;

  throw new Error("Could not find context provider");
};

export const SolanaProvider = ({ children }) => {
  const [program, setProgram] = useState();
  const [isConnected, setIsConnected] = useState();
  const [user, setUser] = useState("loading");

  const { connection } = useConnection();
  const wallet = useAnchorWallet();

  useEffect(() => {
    if (connection) {
      setProgram(getProgram(connection, wallet));
      console.log(program);
    } else {
      setProgram(null);
      console.log("Not Working");
    }
  }, [connection, wallet]);

  // Check wallet connection
  useEffect(() => {
    setIsConnected(!!wallet?.publicKey);
  }, [wallet]);

  // Check for a user account by fetching the user
  const fetchUserAccount = useCallback(async () => {
    if (!program) return;
    try {
      const userAccountPk = getUserAccountPk(wallet?.publicKey);
      console.log(userAccountPk);
      const userAccount = await program.account.user.fetch(userAccountPk);
      setUser(userAccount);
      console.log(userAccount);
    } catch (e) {
      console.log("User not found");
      setUser(false);
      console.error(e);
    }
  });

  // Fetch user
  useEffect(() => {
    fetchUserAccount();
  }, [isConnected]);

  // Create user
  const createUser = useCallback(
    async ({
      name,
      day,
      month,
      year,
      gender,
      phoneNumber,
      email,
      bloodGroup,
      height,
      weight,
      preExistingConditions,
      allergies,
      insuranceProviderName,
      insurancePolicyNo,
      insuranceAmount,
      insuranceDuration,
      insuranceBenifits,
    }) => {
      if (!program) return;

      try {
        const txHash = await program.methods
          .createUser(
            name,
            day,
            month,
            year,
            gender,
            phoneNumber,
            email,
            bloodGroup,
            height,
            weight,
            preExistingConditions,
            allergies,
            insuranceProviderName,
            insurancePolicyNo,
            insuranceAmount,
            insuranceDuration,
            insuranceBenifits
          )
          .accounts({
            user: await getUserAccountPk(wallet?.publicKey),
            owner: wallet?.publicKey,
          })
          .rpc();

        await connection.confirmTransaction(txHash);
        console.log("Created user");
        await fetchUserAccount();
      } catch (e) {
        console.error(e);
        console.log("Error creating user");
      }
    }
  );

  const num = 10;
  return (
    <SolanaContext.Provider value={{ program, num, user, wallet, createUser }}>
      {children}
    </SolanaContext.Provider>
  );
};
