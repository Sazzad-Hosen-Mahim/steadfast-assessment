import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import CommonWrapper from "@/common/CommonWrapper";

const Layout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <CommonWrapper>
          <Outlet />
        </CommonWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
