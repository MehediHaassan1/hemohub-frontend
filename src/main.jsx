import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import AuthProviders from "./context/AuthProviders.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <AuthProviders>
                <HelmetProvider>
                    <div className="text-txt bg-bkg">
                        <RouterProvider router={router} />
                    </div>
                </HelmetProvider>
            </AuthProviders>
        </QueryClientProvider>
    </React.StrictMode>
);
