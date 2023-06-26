import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import Rosters from "./Rosters";
import Schedule from "./Schedule";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      errorElement: <Home />,
      children:[
        {path: "/", element: <Home/>},
        {path: "/rosters", element: <Rosters/>},
        {path: "/schedule", element: <Schedule/>}
      ],
    }
  ]);

const App = () => (
  <div className="App">
    {/* <Home /> */}
    <RouterProvider router={router}></RouterProvider>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
