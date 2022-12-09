import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Shop from "./pages/Shop";
import OurStory from "./pages/OurStory";
import Cart from "./pages/Cart";
import Error from "./pages/Error";

const JSXRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route path="/shop" element={<Shop />} />
      <Route path="/our-story" element={<OurStory />} />
      <Route path="/cart" element={<Cart />} />
      <Route index element={<Home />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={JSXRouter}></RouterProvider>;
}

export default App;
