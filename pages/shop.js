import { Component } from "react";
import Layout from "../components/MyLayout";
import fetch from "isomorphic-unfetch";
import queries from "../queries/shop.js";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopName: "",
      products: []
    };
  }

  componentDidMount() {
    queries.getShopName.then(data => this.setState({ shopName: data }));
  }

  render() {
    // console.log(this.state);
    return (
      <Layout page="Shop">
        <h2>{this.state.shopName}</h2>
        <p>This will eventually connect to a shopify store.</p>
      </Layout>
    );
  }
}

export default Shop;
