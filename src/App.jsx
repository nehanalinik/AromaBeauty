import React, { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import { Home, Cart, OurStory, Shop, Layout, Error, User } from "./pages";

function App() {
  const [user, setLoginUser] = useState({});
  const JSXRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<Error />}>
        <Route path="/shop" element={<Shop />} />
        <Route path="/our-story" element={<OurStory />} />
        {user && user._id ? (
          <Route
            path="/user"
            element={<User user={user} setLoginUser={setLoginUser} />}
          />
        ) : (
          <Route path="/user" element={<Login setLoginUser={setLoginUser} />} />
        )}

        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
        <Route path="/register" element={<Register />} />
        <Route index element={<Home />} />
      </Route>
    )
  );
  return <RouterProvider router={JSXRouter}></RouterProvider>;
}

export default App;
