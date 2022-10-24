import React, { Component } from 'react';

class Demo3 extends Component {
  constructor() {
    super();
    this.state = {
      htmlrender: false,
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
    let state = this.state;
    let data = state.storedData;
    this.setState({
      htmlrender: true,
      storedData: {
        name: data.name.concat(state.name),
        email: data.email.concat(state.email),
        phone: data.phone.concat(state.phone),
        school: data.school.concat(state.school),
        elevel: data.elevel.concat(state.elevel),
        studydate: data.studydate.concat(state.studydate),
        company: data.company.concat(state.company),
        postitle: data.postitle.concat(state.postitle),
        maintask: data.maintask.concat(state.maintask),
        datefromto: data.datefromto.concat(state.datefromto),
      },
    });
  };
  handleChange = (e) => {
    let first = e.target.id;
    this.setState({
      [first]: e.target.value,
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
    } = this.state;
    return (
      <div className="App">
        <h1>CV Application</h1>
        <div className="form">
          <form>
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
              <input id="studydate" onChange={this.handleChange} value={studydate}></input>
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
              <input id="datefromto" onChange={this.handleChange} value={datefromto}></input>
            </div>
            <button type="submit" onClick={this.submitForm}>
              Submit
            </button>
          </form>
          {this.state.htmlrender && (
            <RenderHtml
              name={this.state.storedData.name}
              email={this.state.storedData.email}
              phone={this.state.storedData.phone}
              school={this.state.storedData.school}
              elevel={this.state.storedData.elevel}
              studydate={this.state.storedData.studydate}
              company={this.state.storedData.company}
              postitle={this.state.storedData.postitle}
              maintask={this.state.storedData.maintask}
              datefromto={this.state.storedData.datefromto}
            />
          )}
        </div>
      </div>
    );
  }
}
export default Demo3;
