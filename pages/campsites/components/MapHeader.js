import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import NavMenu from "../../../components/NavMenu";

const handleClick = () => {
  const dispatch = useDispatch();
  const toggleNav = () => {
    dispatch({
      type: "TOGGLE_NAV",
    });
  };
  return { toggleNav };
};

const MapHeader = (props) => {
  const bannerOpen = useSelector((state) => state.navIsOpen);
  const { toggleNav } = handleClick();

  return (
    <header>
      <div className="header-left">
        <Link href="/">
          <a>{props.title || "Ryan Grunest"}</a>
        </Link>
      </div>
      <div className="header-right">
        <a onClick={toggleNav} className="hamburger">
          <div className={bannerOpen ? "burger-1" : ""}></div>
          <div className={bannerOpen ? "burger-2" : ""}></div>
          <div className={bannerOpen ? "burger-3" : ""}></div>
        </a>
      </div>
      <NavMenu click={handleClick} open={bannerOpen} />
    </header>
  );
};

export default MapHeader;
