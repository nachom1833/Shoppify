import "./App.css";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Layout from "./Components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    //layout deberia encerrar todo y no solo el header y el footer
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer bienvenida={"Bienvenidos"} />}
          />
          <Route
            path="/products"
            element={<ItemListContainer bienvenida={"Bienvenidos"} />}
          />
          <Route
            path="/category/:category"
            element={<ItemListContainer bienvenida={"Bienvenidos"} />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
