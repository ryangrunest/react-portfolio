import MyHeader from "./MyHeader";
import MyHead from "./MyHead";

const layoutStyle = {
  margin: 20
};

const Layout = props => {
  return (
    <>
      <MyHead page={props.page} />
      <div style={layoutStyle}>
        <MyHeader />
        {props.children}
      </div>
      <style jsx global>{`
        html,
        body {
          position: relative;
          font-family: "Dosis", sans-serif;
          letter-spacing: 1px;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
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
