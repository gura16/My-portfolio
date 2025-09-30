import { createGlobalStyle } from "styled-components";
import Header from "./header";
import Backgroundpicture from "./assets/bg-main-desktop.png";

const GlobalStyles = createGlobalStyle`
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
}
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
    </>
  );
}

export default App;
