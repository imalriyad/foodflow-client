import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainLayout from "./Layout/MainLayout";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import AuthProvider from "./Context/AuthProvider";
import  { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <Toaster />
      <RouterProvider router={router}>
        <MainLayout></MainLayout>
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
