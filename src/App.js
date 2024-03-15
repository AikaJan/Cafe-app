import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";
import AddFoodForm from "./AddFoodForm";
import NotFound from "./NotFound";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();

    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
    getDrinks();
  }, []);

  // const menu = [...snacks, ...drinks];

  // console.log("Snacks and drinks", menu);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar snacks={snacks} drinks={drinks} />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} />
            </Route>
            <Route exact path="/snacks">
              <Menu snacks={snacks} title="Snacks menu" />
            </Route>
            <Route exact path="/drinks">
              <Menu drinks={drinks} title="Drinks menu" />
            </Route>
            <Route path="/snacks/:id">
              <Snack items={snacks} cantFind="/snacks" />
            </Route>
            <Route path="/drinks/:id">
              <Snack items={drinks} cantFind="/drinks" />
            </Route>
            <Route exact path="/add">
              <AddFoodForm />
            </Route>
            <Route exact path="/not-found">
              <NotFound />
            </Route>
            <Redirect from="*" to="/not-found" />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
