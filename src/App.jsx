import "./App.css";
import Brand from "./Components/Brand";
import ItemListContainer from "./Components/ItemListContainer";
import Navbar from "./Components/nav_bar";

function App() {
  return (
    <>
      <header className="header">
        <Brand />

        <Navbar />
      </header>
      <ItemListContainer Bienvenida={"Bienvenidos a Shoppify"} />
    </>
  );
}

export default App;
