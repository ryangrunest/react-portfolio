import MyHeader from "./MyHeader";
import MyHead from "./MyHead";
import Footer from "./Footer";

const Layout = props => {
  return (
    <>
      <MyHead page={props.page} />
      <div id="Layout">
        <MyHeader />
        {props.children}
        <Footer />
      </div>
      <script
        src="https://kit.fontawesome.com/7fde712a5d.js"
        crossOrigin="anonymous"
      ></script>
    </>
  );
};

export default Layout;
