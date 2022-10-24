import React, { Component } from 'react';

function RenderHtml(props) {
  const { name, email, phone, school, elevel, studydate, company, postitle, maintask, datefromto } =
    props;
  return (
    <div className="formSec">
      <div>
        <h2>General information</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>
      <h2>Educational experience</h2>
      <p>School: {school}</p>
      <p>Education level: {elevel}</p>
      <p>Date of study: {studydate}</p>
      <h2>Practical experience</h2>
      <p>Company name: {company}</p>
      <p>Postion title: {postitle} </p>
      <p>Main tasks of your job: {maintask} </p>
      <p>Date from and until when you worked for that company: {datefromto} </p>
      <button className="edit">Edit</button>
    </div>
  );
}

export default RenderHtml;
