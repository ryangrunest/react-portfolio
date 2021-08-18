import { useSelector } from "react-redux";
import MyHeader from "./DefaultHeader";
import MyHead from "./DefaultHead";
import Footer from "./DefaultFooter";

export default function Layout({ children, page, wrapper }) {
  const navIsOpen = useSelector((state) => state.navIsOpen);
  return (
    <>
      <MyHead page={page} />
      <div id="default-layout" className={navIsOpen ? "nav-open" : ""}>
        <MyHeader />
        {children}
        <Footer />
      </div>
    </>
  );
}
