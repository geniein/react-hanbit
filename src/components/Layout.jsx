import Header from "./Header";
import Footer from "./Footer";
import FixedButton from "./FixedButton";

function Layout({ children }) {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 pt-16">{children}</main>
      <Footer />
      <FixedButton/>
    </div>
  );
}

export default Layout;
