import MyHeader from "./DefaultHeader";
import MyHead from "./DefaultHead";
import Footer from "./DefaultFooter";

export default function Layout({ children, page, wrapper }) {
  return (
    <>
      <MyHead page={page} />
      <div id="default-layout" className={wrapper}>
        <MyHeader />
        {children}
        <Footer />
      </div>
    </>
  );
}
