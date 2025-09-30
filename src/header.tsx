import { styled } from "styled-components";
import menubutton from "./assets/menu.svg";

function Header() {
  return (
    <Headercomponent>
      <Name>Gurami-Kvakhadze</Name>
      <BurgerMenu src={menubutton} />
    </Headercomponent>
  );
}

export default Header;

const Headercomponent = styled.header`
  display: flex;
  justify-content: space-between;
  border: 1px solid #1e2d3d;
  border-radius: 5px;
  padding: 15px;
  background-color: rgba(1, 22, 39, 0.95);
`;
const Name = styled.header`
  color: white;
  font-family: "Fira Code", sans-serif;
`;
const BurgerMenu = styled.img`
  width: 20px;
  height: 20px;
`;
