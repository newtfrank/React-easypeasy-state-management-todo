import React, { useEffect } from "react";
import model from "./model";
import Todos from "./components/Todos";
import Nav from "./components/Navbar";
import AddTodo from "./components/AddTodo";
import { StoreProvider, createStore } from "easy-peasy";
import { PageView, initGA } from "./components/tracking";
import "./App.css";

const store = createStore(model);
const trackingId = "UA-146062468-1";

function App() {
  useEffect(() => {
    try {
      initGA(trackingId);
      PageView();
      console.log("this portion is running");
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <StoreProvider store={store}>
      <Nav />
      <div className="container">
        <Todos />
        <AddTodo />
      </div>
    </StoreProvider>
  );
}

export default App;
