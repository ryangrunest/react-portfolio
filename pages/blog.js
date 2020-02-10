import React, { Component } from "react";
import Layout from "../components/MyLayout";
import BlogPost from "../components/BlogPost";
import BlogArray from "../blogposts.js";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numBlogs: BlogArray.length
    };
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick = event => {
    event.preventDefault();
    this.setState({ numBlogs: this.state.numBlogs + 1 });
  };

  render() {
    console.log(BlogArray);
    return (
      <Layout page="Blog">
        <h1>
          This is the blog page. There are currently {this.state.numBlogs}{" "}
          posts.
        </h1>
        {BlogArray.map((blog, index) => {
          return (
            <BlogPost
              key={index}
              title={blog.title}
              text={blog.text}
              imgPath={blog.imgPath}
            />
          );
        })}
        <button onClick={this.buttonClick}>Add A Post</button>

        <style>{`
    `}</style>
      </Layout>
    );
  }
}

export default Blog;
