import { Header } from "../header/header";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
export default function AppLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
