import { AnchorProvider, BN, Program } from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";

import { PROGRAM_ID } from "./constants";

export const getProgram = (connection, wallet) => {
  const IDL = require("./idl.json");
  const provider = new AnchorProvider(
    connection,
    wallet,
    AnchorProvider.defaultOptions()
  );
  const program = new Program(IDL, PROGRAM_ID, provider);
  return program;
};

export const getUserAccountPk = (owner) => {
  return PublicKey.findProgramAddressSync(
    [Buffer.from("user"), owner.toBuffer()],
    PROGRAM_ID
  )[0];
};
