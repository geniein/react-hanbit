import Header from "./Header";
import Footer from "./Footer";
import FixedButton from "./FixedButton";
import { Outlet } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 pt-16">
        <Outlet/>
      </main>
      <Footer />
      <FixedButton/>
    </div>
  );
}

export default Layout;
