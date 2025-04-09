// import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { createRoot } from "react-dom/client";
import UserClass from "./components/UserClass";

function App(){
    return (
        <>
        <UserClass name='Rahul Nizare' location='surat'/>
        </>
    )
}

const root = createRoot(document.getElementById('root'))
root.render(
    <App/>
)