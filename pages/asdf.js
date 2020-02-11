import React, { Component } from "react";
import Layout from "../components/MyLayout";
import "firebase/database";
import firebase from "firebase/app";
import {
  FirebaseDatabaseMutation,
  FirebaseDatabaseProvider
} from "@react-firebase/database";
import dbconfig from "../dbconfig";

class ASDF extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      imgPath: "",
      text: "",
      date: this.getDate()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({ [name]: value });
  }

  getDate() {
    const date = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    return date.toLocaleDateString(undefined, options);
  }

  render() {
    console.log(this.state);
    return (
      <FirebaseDatabaseProvider firebase={firebase} {...dbconfig}>
        <FirebaseDatabaseMutation type="push" path="BlogPosts/">
          {({ runMutation }) => (
            <Layout page="ASDF">
              {/* <h1>
          This is the form to create a new blog. You probably shouldn't be
          here...
        </h1> */}
              <form
                onSubmit={async event => {
                  event.preventDefault();
                  await runMutation({
                    title: this.state.title,
                    imgPath: this.state.imgPath,
                    text: this.state.text,
                    date: this.state.date
                  });
                  setTimeout(() => {
                    window.location = "/blog";
                  }, 2000);
                }}
              >
                <div>
                  <label>
                    title
                    <input
                      type="text"
                      name="title"
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
                <div>
                  <label>Image Path (from root / public folder)</label>
                  <input
                    type="text"
                    name="imgPath"
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <label>
                    text
                    <textarea
                      type="textarea"
                      name="text"
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
                <input type="submit" value="Submit" />
              </form>
              <style>{`
        form {
          width: 100%;
          height: 100%;
        }
        input, textarea {
          display: block;
        }

      `}</style>
            </Layout>
          )}
        </FirebaseDatabaseMutation>
      </FirebaseDatabaseProvider>
    );
  }
}

export default ASDF;
