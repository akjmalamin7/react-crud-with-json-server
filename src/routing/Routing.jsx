import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("../pages/Home"));
const AddUser = React.lazy(() => import("../pages/AddUser"));
const View = React.lazy(() => import("../pages/View"));
const Update = React.lazy(() => import("../pages/Update"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const Routing = () => {
  return (
    <div>
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="users/update/:id" element={<Update />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Routing;
