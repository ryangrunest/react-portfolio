import Link from "next/link";
import { Component } from "react";
import NavMenu from "./NavMenu";

class MyHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      bannerOpen: !this.state.bannerOpen
    });
  }
  render() {
    return (
      <>
        <header>
          <div className="header-left">
            <Link href="/">
              <a>Ryan Grunest</a>
            </Link>
          </div>
          <div className="header-right">
            <a onClick={this.handleClick} className="hamburger">
              <div className={this.state.bannerOpen ? "burger-1" : ""}></div>
              <div className={this.state.bannerOpen ? "burger-2" : ""}></div>
              <div className={this.state.bannerOpen ? "burger-3" : ""}></div>
            </a>
          </div>
          <NavMenu click={this.handleClick} open={this.state.bannerOpen} />
        </header>
      </>
    );
  }
}

export default MyHeader;
