import { styled } from "styled-components";
import Githubimage from "./github.svg";
import Linkdinimage from "./linkedin.svg";
import Xmark from "./xmark.svg";

function Footer() {
  return (
    <Futtercontainer>
      <Findme>find me in:</Findme>
      <Iconimage src={Xmark} />
      <Iconimage src={Linkdinimage} />
      <Iconimage src={Githubimage} />
    </Futtercontainer>
  );
}

export default Footer;

const Futtercontainer = styled.div`
  border: 1px solid #1e2d3d;
  border-radius: 5px;
  padding: 10px;

  background-color: rgba(1, 22, 39, 0.95);
`;
const Findme = styled.p`
  color: white;
`;
const Iconimage = styled.img`
  height: 20px;
  width: 20px;
`;
