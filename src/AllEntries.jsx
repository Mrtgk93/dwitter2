import React, { useEffect } from "react";
import Entry from "./Entry";
import { useSelector, useDispatch } from "react-redux";
import { getAllEntries } from "./assets/redux-stuff/actions";

export default function AllEntries() {
  const entries = useSelector((depo) => depo.allEntries);
  const token = useSelector((depo) => depo.token);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEntries(token));
  }, []);

  return (
    <div className=" font-suslu text-white text-xl flex flex-col ">
      {entries.map((entry) => (
        <div key={entry.dwit_id}>
          <Entry entry={entry} />
        </div>
      ))}
    </div>
  );
}
