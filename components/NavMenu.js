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
        </ul>

        {/* <Link href="/shop">
        <a>Shop</a>
      </Link> */}
      </div>
    );
  }
}

export default NavMenu;
