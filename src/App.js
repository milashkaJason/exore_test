import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {Container} from "react-bootstrap";
import {Header} from "./components/navbar/Navbar";
import {Products} from "./components/products/Products";
import {CurrentProduct} from "./components/current_product/CurrentProduct";
import {CreateProduct} from "./components/create_product/CreateProduct";
import {CurrentCreatedProduct} from "./components/current_created_product/CurrentCreatedProduct";
import {ChangeProduct} from "./components/change_product/ChangeProduct";

function App() {

  return (
      <BrowserRouter>
              <Header/>
          <Container style={{marginTop: 30}}>
          <Routes>
              <Route exact path={'/'} element={<Navigate to={'/products'}/>}/>
              <Route exact path={'/products'} element={<Products/>} />
              <Route exact path={'/product/:id'} element={<CurrentProduct/>} />
              <Route exact path={'/created_product/:id'} element={<CurrentCreatedProduct/>} />
              <Route exact path={'/change_product/:id/:created'} element={<ChangeProduct/>} />
              <Route exact path={'/create_product/'} element={<CreateProduct/>} />
              <Route path={'*'} element={<div>404</div>} />
          </Routes>

          </Container>
      </BrowserRouter>
  );
}

export default App;
