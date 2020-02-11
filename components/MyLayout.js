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
          background: linear-gradient(225deg, #fff, #f0f0f0);
          position: relative;
          font-family: "Dosis", sans-serif;
          letter-spacing: 1px;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          color: #292929;
        }
        a {
          text-decoration: none;
          color: #292929;
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
