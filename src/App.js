import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showModal = () => {
    setCartIsShown(true);
  };
  const hideModal = () => {
    setCartIsShown(false);
  };
  return (
    <>
      {cartIsShown && <Cart onClose={hideModal} />}
      <Header onButtonClick={showModal}></Header>
      <main>
        <Meals></Meals>
      </main>
    </>
  );
}

export default App;
