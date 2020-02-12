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
            <h1>
              This is the blog page. There are currently {this.state.numBlogs}{" "}
              posts.
            </h1>
            <FirebaseDatabaseNode path="BlogPosts/" orderByKey>
              {data => {
                console.log(data);
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
            {this.state.blogData.map((blog, index) => {
              return (
                <BlogPost
                  key={index}
                  title={blog[1].title}
                  text={blog[1].text}
                  imgPath={blog[1].imgPath}
                  date={blog[1].date}
                />
              );
            })}
            <style>{`
    `}</style>
          </Layout>
        </FirebaseDatabaseProvider>
      </>
    );
  }
}

export default Blog;
