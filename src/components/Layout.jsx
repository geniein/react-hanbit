import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import FixedButton from "./FixedButton";
import Header from "./Header";

function Layout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header />
      <main className="mx-auto flex w-full max-w-[1380px] flex-1 px-4 pb-28 pt-28 sm:px-6 lg:px-10 lg:pt-32">
        <Outlet />
      </main>
      <Footer />
      <FixedButton />
    </div>
  );
}

export default Layout;
