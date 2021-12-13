import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./core/app/App";
import {StoreProvider} from "./store/store-provider";

ReactDOM.render(
    <React.StrictMode>
        <StoreProvider>
            <App/>
        </StoreProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
