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
import WordBreak from "../components/WordBreak";

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
      <div className="blog">
        <FirebaseDatabaseProvider firebase={firebase} {...dbconfig}>
          <Layout page="Blog">
            <h1>
              <p>
                These are words about various things that I find interesting or
                that are encompassing my life.
              </p>
              <p>
                Some of them have to do with{" "}
                <span className="highlighted">software development</span>. Some
                of them have to do with{" "}
                <span className="highlighted">sounds</span>. Some of them have
                to do with <span className="highlighted">sunscreen</span>.
              </p>
            </h1>
            <FirebaseDatabaseNode path="BlogPosts/" orderByKey>
              {data => {
                if (data.value) {
                  this.setState({
                    blogData: Object.entries(data.value),
                    numBlogs: Object.entries(data.value).length
                  });
                  return "";
                } else {
                  return <div>Could not get data</div>;
                }
              }}
            </FirebaseDatabaseNode>
            <div className="blogpost-container">
              {this.state.blogData.reverse().map((blog, index) => {
                return (
                  <BlogPost
                    id={blog[0]}
                    title={blog[1].title}
                    text={blog[1].text}
                    imgPath={blog[1].imgPath}
                    date={blog[1].date}
                    key={blog[0]}
                  />
                );
              })}
            </div>
          </Layout>
        </FirebaseDatabaseProvider>
      </div>
    );
  }
}

export default Blog;
