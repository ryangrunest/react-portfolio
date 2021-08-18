import MyHeader from "./DefaultHeader";
import MyHead from "./DefaultHead";
import Footer from "./DefaultFooter";

export default function Layout({ children, page }) {
  return (
    <>
      <MyHead page={page} />
      <div id="default-layout">
        <MyHeader />
        {children}
        <Footer />
      </div>
    </>
  );
}
