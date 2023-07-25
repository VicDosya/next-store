import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

const Layout = ({ children }: any) => (
  <div>
    <Navigation />
    {children}
    <Footer />
  </div>
);
export default Layout;