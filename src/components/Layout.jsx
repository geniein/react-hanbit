import { Outlet } from "react-router-dom";
import FixedButton from "./FixedButton";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-zinc-950 antialiased">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-20 sm:px-6 sm:pb-20">
        <Outlet />
      </main>
      <Footer />
      <FixedButton />
    </div>
  );
}

export default Layout;
