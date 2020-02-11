import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/database";
import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode
} from "@react-firebase/database";
import dbconfig from "../dbconfig";
import Layout from "../components/MyLayout";
import BlogPost from "../components/BlogPost";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numBlogs: 0,
      blogData: []
    };
  }
  render() {
    return (
      <>
        <FirebaseDatabaseProvider firebase={firebase} {...dbconfig}>
          <Layout page="Blog">
            {/* <h1>
              This is the blog page. There are currently {this.state.numBlogs}{" "}
              posts.
            </h1> */}
            <FirebaseDatabaseNode path="BlogPosts/" limitToFirst={3} orderByKey>
              {data => {
                this.setState({ blogData: data.value });
                return "";
              }}
            </FirebaseDatabaseNode>
            {this.state.blogData != null
              ? this.state.blogData.map((blog, index) => {
                  return (
                    <BlogPost
                      key={index}
                      title={blog.title}
                      text={blog.text}
                      imgPath={blog.imgPath}
                    />
                  );
                })
              : ""}
            <style>{`
    `}</style>
          </Layout>
        </FirebaseDatabaseProvider>
      </>
    );
  }
}

export default Blog;
