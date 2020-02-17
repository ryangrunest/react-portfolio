import fetch from "isomorphic-unfetch";

const url = "https://another-test-store-97213.myshopify.com/api/graphql";
const headers = {
  "Content-Type": "application/graphql",
  "X-Shopify-Storefront-Access-Token": "5db76a7bcd70717eade01e6a64392829"
};

let queries = {
  getProductsWithImages: numberOfProducts => {
    let query = `query	{
      products(first:${numberOfProducts})	{
        edges {
          node {
            id
            title
            images(first: 1) {
              edges {
                node {
                  id
                }
              }
            }
            priceRange {
              maxVariantPrice {
                amount
              }
            }
          }
        }
      }
    }`;
    fetch(url, {
      method: "post",
      headers: headers,
      body: query
    })
      .then(r => r.json())
      .then(data => {
        return console.log(data);
      });
  },
  getShopName: new Promise((resolve, reject) => {
    let value = "cheeseburger";
    let query = `query	{
      shop {
        name
      }
    }
    `;
    fetch(url, {
      method: "post",
      headers: headers,
      body: query
    })
      .then(r => r.json())
      .then(data => {
        value = data.data.shop.name;
        resolve(value);
      });
  })
};

export default queries;
