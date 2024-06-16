import { DivHeader, Titulo } from "./style";
import { GoKebabHorizontal } from "react-icons/go";

export function Header() {
  return (
    <DivHeader>
      <GoKebabHorizontal size={30} style={{ marginLeft: "0px" }} />
      <Titulo>Engeharia de Sistemas</Titulo>
    </DivHeader>
  );
}
