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
              <div className="form-container">
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
                      title:
                      <input
                        type="text"
                        name="title"
                        onChange={this.handleChange}
                        required
                      />
                    </label>
                  </div>
                  <div>
                    <label>image path (from root / public folder):</label>
                    <input
                      type="text"
                      name="imgPath"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label>
                      text:
                      <textarea
                        type="textarea"
                        name="text"
                        onChange={this.handleChange}
                        required
                      />
                    </label>
                  </div>
                  <input className="submit-btn" type="submit" value="SUBMIT" />
                </form>
              </div>
              <style>{`
        form {
          display: block;
          margin: auto;
        }
        .form-container {
          position: relative;
          width: 96vw;
          display: flex;
          margin: 0 auto;
        }
        input, textarea {
          display: block;
          padding: 0.5rem 0.8rem;
          border: none;
          margin: 1rem 0;
          margin-top: 0.2rem;
          width: 450px;
          box-shadow: 0px 0px 10px -3px rgba(0,0,0,0.1);
          transition: 0.3s all;
          border-radius: 5px;
        }
        input:hover, textarea:hover {
          box-shadow: 3px 2px 0px 1px rgba(0,0,0,0.3);
        }
        textarea:focus, input:focus {
          outline: none;
          box-shadow: 10px 10px 10px rgba(0,0,0,0.3);
        }
        .submit-btn {
          background-color: #1e1e1e;
          color: #f0f0f0;
          font-size: 20px;
          width: 20rem;
          border-radius: 5px;
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
