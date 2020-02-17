import { Component } from "react";
import Client from "graphql-js-client";
import Layout from "../components/MyLayout";
import typeBundle from "../types/Types";
import fetch from "isomorphic-unfetch";

// const client = new Client(typeBundle, {
//   url: "https://another-test-store-97213.myshopify.com/api/graphql",
//   fetcherOptions: {
//     headers: {
//       "X-Shopify-Storefront-Access-Token": "5db76a7bcd70717eade01e6a64392829"
//     }
//   }
// });

let query1 = `query	{
  products(first:1)	{
      edges	{
          node	{
              id
              handle
              variants(first:1)	{
                  edges	{
                      node	{
                          id
                      }
                  }
              }
          }
      }
  }
}`;

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopName: "",
      products: []
    };
  }

  componentDidMount() {
    // let query = client.query(root => {
    //   root.add("products", { args: { first: 10 } }, product => {
    //     product.add("title");
    //   });
    //   // root.add("shop", shop => {
    //   //   shop.add("name");
    //   //   shop.addConnection("products", { args: { first: 10 } }, product => {
    //   //     product.add("title");
    //   //     product.add("description");
    //   //     product.addConnection("images", { args: { first: 1 } }, image => {
    //   //       image.add("id");
    //   //     });
    //   //   });
    //   // });
    // });
    // client.send(query).then(({ model, data }) => {
    //   console.log(data);
    //   // this.setState({
    //   //   shopName: data.shop.name,
    //   //   products: data.shop.products.edges
    //   // });
    //   // console.log(model); // The serialized model with rich features
    //   // console.log(data); // The raw data returned from the API endpoint
    //   // console.log(name);
    // });
    fetch("https://another-test-store-97213.myshopify.com/api/graphql", {
      method: "post",
      headers: {
        "Content-Type": "application/graphql",
        "X-Shopify-Storefront-Access-Token": "5db76a7bcd70717eade01e6a64392829"
      },
      body: query1
    })
      .then(r => r.json())
      .then(data => console.log(data));
  }

  render() {
    console.log(this.state);
    return (
      <Layout page="Shop">
        <h2>{this.state.shopName}</h2>
        <p>This will eventually connect to a shopify store.</p>
      </Layout>
    );
  }
}

export default Shop;
