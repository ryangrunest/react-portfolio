import Link from "next/link";
import { Component } from "react";

class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={this.props.open ? "NavMenu open" : "NavMenu"}>
        <ul>
          <li>
            <Link href="/">
              <a onClick={this.props.click}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a onClick={this.props.click}>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/work">
              <a onClick={this.props.click}>Work</a>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavMenu;
