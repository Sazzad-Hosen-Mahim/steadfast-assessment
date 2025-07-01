import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import CommonWrapper from "@/common/CommonWrapper";
import Category from "@/components/Category/Category";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

const Layout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Category />
      <Breadcrumbs />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
