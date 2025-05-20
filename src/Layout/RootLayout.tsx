// RootLayout.jsx
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <header>Esse Header é do RootLayout</header>
      <main>
        <Outlet /> {/* Aqui entram Home ou About */}
      </main>
    </div>
  );
}
