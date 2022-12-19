import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import { Home, Cart, OurStory, Shop, Layout, Error, User } from "./pages";

const JSXRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route path="/shop" element={<Shop />} />
      <Route path="/our-story" element={<OurStory />} />
      <Route path="/user" element={<User />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route index element={<Home />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={JSXRouter}></RouterProvider>;
}

export default App;
