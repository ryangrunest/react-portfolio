import Header from "./Header";
import MyHead from "./MyHead";

const layoutStyle = {
  margin: 20
};

const Layout = props => {
  return (
    <>
      <MyHead page={props.page} />
      <div style={layoutStyle}>
        <Header />
        {props.children}
      </div>
      <style jsx global>{`
        html,
        body {
          font-family: "Dosis", sans-serif;
          letter-spacing: 1px;
        }
        a {
          text-decoration: none;
          color: black;
        }
        a:hover,
        a:active,
        a:focus,
        a: visited {
          color: gray;
        }
      `}</style>
    </>
  );
};

export default Layout;
