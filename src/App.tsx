import { createGlobalStyle } from "styled-components";
import Header from "./header";
import About_me from "./about_me";
import Backgroundpicture from "./assets/bg-main-desktop.png";

const GlobalStyles = createGlobalStyle`
  
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&family=Pacifico&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
  background-color: rgb(1, 12, 21); 
  background-image: url(${Backgroundpicture});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 100vh;
  padding: 20px;
}
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <About_me />
    </>
  );
}

export default App;
