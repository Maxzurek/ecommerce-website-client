import "./index.scss";

import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./hooks/useCart";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <CartProvider>
        <App />
    </CartProvider>
);
