import { styled } from "styled-components";

function About_me() {
  return (
    <AboutmeComponent>
      <Hello>Hi all. I am </Hello>
      <Name>Gurami Kvakhadze</Name>
      <Profession>{"> Front-end Developer"}</Profession>
      <Github>{"// find my profile on Github:"}</Github>
    </AboutmeComponent>
  );
}

export default About_me;

const AboutmeComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #1e2d3d;
  border-radius: 5px;
  height: 75vh;
`;
const Hello = styled.p`
  color: white;
  font-family: "Fira Code", sans-serif;
`;
const Name = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 100;
  font-style: normal;
  color: white;
  font-size: 20px;
`;

const Profession = styled.p`
  color: white;
`;

const Github = styled.p`
  color: white;
`;
