import { Switch, Route, NavLink } from "react-router-dom";
import Login from "./Login";
import "./App.css";
import AllEntries from "./AllEntries";
import { useDispatch } from "react-redux";
import { checklogin } from "./assets/redux-stuff/actions";
import { useEffect } from "react";
import Authlink from "./Authlink";
import Profile from "./Profile";
import NewEntry from "./NewEntry";
import Register from "./Register";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checklogin());
  }, []);
  return (
    <>
      {/* Linkler */}
      <nav className="flex justify-evenly text-white text-3xl py-4">
        <img src="./photos/225132.png" alt="" width="75px" />
        <NavLink
          className=" flex items-center"
          to="/"
          exact
          activeClassName="text-blue-700"
        >
          AnaSayfa
        </NavLink>
        <NavLink
          className="flex items-center"
          to="/profil"
          activeClassName="text-blue-700"
        >
          Profilim
        </NavLink>
        <Authlink />
        <NavLink
          className="flex items-center"
          to="/register"
          activeClassName="text-blue-700"
        >
          Üye ol
        </NavLink>
      </nav>
      <main className="">
        <Switch>
          <Route exact path="/">
            <h1 className="text-center text-stone-500 font-suslu text-3xl py-4"></h1>
            <NewEntry />
            <AllEntries />
          </Route>
          <Route exact path="/login">
            <h1 className="text-center text-stone-500 font-suslu text-3xl py-16">
              Dwitter' a / Giriş Yap
            </h1>
            <Login />
          </Route>
          <Route exact path="/Profil">
            <Profile />
          </Route>
          <Route exact path="/register">
            <h1 className="text-center text-stone-500 font-suslu text-3xl py-16">
              Dwitter' a / Üye ol
            </h1>
            <Register />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
