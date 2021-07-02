import React, { Component } from "react";
import Layout from "../components/MyLayout";
import BlogPost from "../components/BlogPost";
import axios from "axios";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numBlogs: 0,
      blogData: [],
    };
  }
  componentDidMount() {
    try {
      axios({
        method: "GET",
        url: "https://rg-portfolio-backend.herokuapp.com/blog-posts",
        headers: {
          Authorization: process.env.NEXT_PUBLIC_DB_TOKEN,
        },
      }).then((res) => {
        console.log(res);
        this.setState({ blogData: res.data, numBlogs: res.data.length });
      });
    } catch (err) {
      console.warn("failed to retrieve blog posts:\n", err);
      return;
    }
  }
  render() {
    return (
      <div className="blog">
        <Layout page="Blog">
          <h1>
            <p>
              These are words about various things that I find interesting or
              that are encompassing my life.
            </p>
            <p>
              Some of them have to do with{" "}
              <span className="highlighted">software development</span>. Some of
              them have to do with <span className="highlighted">sounds</span>.
              Some of them have to do with{" "}
              <span className="highlighted">sunscreen</span>.
            </p>
          </h1>
          {(data) => {
            if (data.value) {
              this.setState({
                blogData: Object.entries(data.value),
                numBlogs: Object.entries(data.value).length,
              });
              return "";
            } else {
              return <div>Could not get data</div>;
            }
          }}
          <div className="blogpost-container">
            {this.state.blogData.reverse().map((blog, index) => {
              console.log(blog.blogMedia);
              const blogImg = blog.blogMedia
                ? `https://rg-portfolio-backend.herokuapp.com${blog.blogMedia.url}`
                : "";
              return (
                <BlogPost
                  id={blog}
                  title={blog.blogHeader}
                  text={blog.blogText}
                  imgPath={blogImg}
                  date={blog.date}
                  key={blog.blogHeader}
                />
              );
            })}
          </div>
        </Layout>
      </div>
    );
  }
}

export default Blog;
