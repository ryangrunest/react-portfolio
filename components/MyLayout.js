import MyHeader from "./MyHeader";
import MyHead from "./MyHead";

const Layout = props => {
  return (
    <>
      <MyHead page={props.page} />
      <div>
        <MyHeader />
        {props.children}
      </div>
      <style jsx global>{`
        html,
        body {
          background: #f3f5f6;
          position: relative;
          font-family: "Dosis", sans-serif;
          letter-spacing: 1px;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          color: #252b33;
        }
        body {
          padding: 20px;
        }
        @media only screen and (max-width: 600px) {
          body {
            padding: 0;
          }
        }
        *::selection {
          color: #f3f5f6;
          background-color: rgb(120, 169, 152);
        }
        a {
          text-decoration: none;
          color: #252b33;
          transition: 0.3s all;
        }
        p strong {
          font-weight: bold;
          font-size: 1.1rem;
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
