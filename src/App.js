import './App.css';
import React, { Component } from 'react';
import RenderHtml from './components/RenderHtml';

class App extends Component {
  constructor() {
    super();
    this.state = {
      htmlrender: false,
      isActive: true,
      toggle: false,
      name: '',
      email: '',
      phone: '',
      school: '',
      elevel: '',
      studydate: '',
      company: '',
      postitle: '',
      maintask: '',
      datefromto: '',
      storedData: {
        name: [],
        email: [],
        phone: [],
        school: [],
        elevel: [],
        studydate: [],
        company: [],
        postitle: [],
        maintask: [],
        datefromto: [],
      },
    };
  }
  submitForm = (e) => {
    e.preventDefault();
    this.setState({
      htmlrender: true,
      isActive: false,
    });
  };
  handleChange = (e) => {
    let first = e.target.id;
    this.setState({
      [first]: e.target.value,
    });
  };
  edittoggle = (e) => {
    this.setState({
      isActive: !this.state.isActive,
      htmlrender: false,
    });
  };
  render() {
    const {
      name,
      email,
      phone,
      school,
      elevel,
      studydate,
      company,
      postitle,
      maintask,
      datefromto,
      isActive,
    } = this.state;
    return (
      <div className="App">
        <h1>CV Application</h1>
        <div className="formSection">
          <form className={isActive ? 'form1' : 'displaynone'}>
            <div className="Section1">
              <h2>General information</h2>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" onChange={this.handleChange} value={name}></input>

              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                name="email"
                onChange={this.handleChange}
                value={email}
              ></input>

              <label htmlFor="phone">Phone</label>
              <input id="phone" type="number" onChange={this.handleChange} value={phone}></input>
            </div>
            <div className="Section2">
              <h2>Educational experience</h2>
              <label htmlFor="school">School</label>
              <input id="school" onChange={this.handleChange} value={school}></input>

              <label htmlFor="elevel">Education level</label>
              <input id="elevel" onChange={this.handleChange} value={elevel}></input>

              <label htmlFor="studydate">Date of study</label>
              <input
                id="studydate"
                onChange={this.handleChange}
                value={studydate}
                type="date"
              ></input>
            </div>
            <div className="Section3">
              <h2>Practical experience</h2>
              <label htmlFor="company">Company Name</label>
              <input id="company" onChange={this.handleChange} value={company}></input>

              <label htmlFor="postitle">Postion title</label>
              <input id="postitle" onChange={this.handleChange} value={postitle}></input>

              <label htmlFor="maintask">Main tasks of your job</label>
              <input id="maintask" onChange={this.handleChange} value={maintask}></input>

              <label htmlFor="datefromto">
                Date from and until when you worked for that company
              </label>
              <input
                id="datefromto"
                onChange={this.handleChange}
                value={datefromto}
                type="date"
              ></input>
            </div>
            <button type="submit" onClick={this.submitForm}>
              Submit
            </button>
          </form>

          {this.state.htmlrender && (
            <RenderHtml
              name={name}
              email={email}
              phone={phone}
              school={school}
              elevel={elevel}
              studydate={studydate}
              company={company}
              postitle={postitle}
              maintask={maintask}
              datefromto={datefromto}
            />
          )}
          <button className="edit" onClick={this.edittoggle}>
            Edit
          </button>
        </div>
      </div>
    );
  }
}

export default App;
