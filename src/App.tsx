import React from "react";
import "./App.css";
import Hooks from "./components/Hooks/Hooks";
import ThrottledButton from "./components/Hooks/Throttling";
import Person from "./components/classComponents/Person";
import { useFetchallDataQuery } from "./redux/api/api";
import { useDispatch } from "react-redux";
import { storeLoginToken } from "./redux/slices/authSlice";

//always use 'use client' while using query or mutation
//use 'use client' in in next js in page.tsx,layout.tsx file in src->app
//In next.js wrap children like this
// <body className={inter.className}>
//       <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//           {children}
//         </PersistGate>
//       </Provider>
//     </body>

function App() {
  const dispatch = useDispatch();

  // QUERY FETCHING
  const reqObj = {
    url: "posts",
  };
  const { data } = useFetchallDataQuery(reqObj);
  console.log("data", data);

  //Slice use

  return (
    <div className="App">
      <Hooks />
      {/* <ThrottledButton/> */}
      {/* <Person name="Ritik" /> */}
      <button onClick={() => dispatch(storeLoginToken("123"))}>Login</button>
      <button onClick={() => dispatch(storeLoginToken(""))}>Logout</button>
    </div>
  );
}

export default App;
