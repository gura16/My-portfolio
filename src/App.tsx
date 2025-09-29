import { createGlobalStyle } from "styled-components";
import Header from "./header";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: rgb(1, 12, 21);
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
