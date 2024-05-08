import Brand from "../Brand/Brand";
import Navbar from "../nav_bar/nav_bar";
import Footer from "../Footer/Footer";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div>
      <header className="header">
        <Brand />
        <Navbar />
      </header>
      <main className="container_main">{children}</main>
     <Footer/>
    </div>
  );
}
