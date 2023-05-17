import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./assets/redux-stuff/actions";

export default function Authlink() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  return user ? (
    <button onClick={() => dispatch(logout())}>Çıkış yap</button>
  ) : (
    <NavLink
      className="flex items-center"
      to="/login"
      activeClassName="text-blue-700"
    >
      Giriş Yap
    </NavLink>
  );
}
