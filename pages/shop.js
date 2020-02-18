import { Component } from "react";
import Layout from "../components/MyLayout";
import Product from "../components/shop/Product";
import queries from "../queries/shop.js";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopName: "",
      products: [],
      isLoaded: false,
      cartURL: ""
    };
    this.createCheckout = this.createCheckout.bind(this);
  }

  componentDidMount() {
    queries.getShopName.then(data =>
      this.setState({ shopName: data, isLoaded: true })
    );
    queries.getProductsWithImages(10).then(value => {
      this.setState({ products: value, isLoaded: true });
    });
  }

  createCheckout(id) {
    queries.createCheckout(id).then(data => {
      this.setState({ cartURL: data });
    });
  }

  render() {
    const { isLoaded, shopName, products } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Layout page="Shop">
          <div className="shop">
            <h2>{shopName}</h2>
            <div className="products-container">
              {products.map((product, index) => {
                return (
                  <Product
                    key={index}
                    id={product.node.id}
                    title={product.node.title}
                    product={product}
                    imgPath={
                      product.node.variants.edges[0].node.image.transformedSrc
                    }
                    createCheckout={this.createCheckout}
                    price={product.node.priceRange.maxVariantPrice.amount}
                  />
                );
              })}
            </div>
          </div>
        </Layout>
      );
    }
  }
}

export default Shop;
