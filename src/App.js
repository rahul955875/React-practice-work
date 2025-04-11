// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import UserClass from "./components/UserClass";
import { createRoot } from "react-dom/client";
import { lazy, Suspense, useContext } from "react";
import UserContext from "./utils/UserContext";

function App() {
  // const arr = [1,2,3]
  // const btn =[]
  // debugger
  // for(var i=0; i<arr.length; i++){
  //     // console.log(i)
  //     // btn.push(<button key={i} onClick={()=>alert('alert'+String(arr[i]))}>button {arr[i]}</button>)
  //     // console.log(arr[i])
  //     (function() {
  //         var copy = i; // copies current value of i (e.g. 0, 1, 2)
  //         btn.push(<button key={copy} onClick={() => alert(arr[copy])}>Button</button>);
  //       })();

  // }
  const UserClass = lazy(() => import("./components/UserClass"));
  const {name} = useContext(UserContext)
  return (
    <>
      {/* {btn} */}
      <h3>App Name :{ name}</h3>
      <Suspense fallback={<h1>Loading...</h1>}>
        <UserClass name="Rahul Nizare" location="surat" />
      </Suspense>
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
