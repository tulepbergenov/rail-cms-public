import { Layout } from "@/shared/types";
import { Global } from "../styles";
import { AntDesign } from "./AntDesign";

export const Providers = ({ children }: Layout) => {
  return (
    <>
      <AntDesign>{children}</AntDesign>
      <Global />
    </>
  );
};
