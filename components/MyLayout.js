import MyHeader from "./MyHeader";
import MyHead from "./MyHead";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <MyHead page={props.page} />
      <div id="Layout">
        <MyHeader />
        {props.children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
