import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logData } from "./redux/action/AppAction";

// import SinUp from "./components/SinUp";
import Sidbar from "./components/sidebar/sid";

function App() {
  const [data, setdata] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logData());
  }, []);
  const sel = useSelector((state) => state);
  useEffect(() => {
    setdata(sel);
    // console.log(data);
  }, [data]);
  return (
    <React.Fragment>
      <Sidbar />
      {/* <LogIn /> */}
    </React.Fragment>
  );
}

export default App;
