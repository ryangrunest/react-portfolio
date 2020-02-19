import WordBreak from "./WordBreak";
import { Component } from "react";
class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      openText: [],
      closedText: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let element = document.querySelector(`#${this.props.id} .text`);
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
    const closedText = this.props.text.match(/.{1,275}/g)[0];
    const splitText = this.props.text.split("\n");
    this.setState({
      openText: splitText,
      closedText: closedText
    });
  }

  render() {
    return (
      <div
        className="BlogPost"
        // style={this.state.isOpen ? "{{width=100%}}" : ""}
        style={this.state.isOpen ? { width: "100%" } : {}}
        id={this.props.id}
        key={this.props.index}
      >
        <h2 className="title">{this.props.title}</h2>
        <h3 className="date">{this.props.date}</h3>
        <div className="image-container">
          <img src={this.props.imgPath}></img>
        </div>
        <div className="text">
          {this.state.isOpen ? (
            this.state.openText.map((line, index) => <p key={index}>{line}</p>)
          ) : (
            <p>{this.state.closedText}</p>
          )}
        </div>
        <WordBreak />
        {this.state.openText.length > 1 ? (
          <div className="button-container">
            <button onClick={this.handleClick}>
              {this.state.isOpen ? "Read Less" : "Read More"}
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default BlogPost;
