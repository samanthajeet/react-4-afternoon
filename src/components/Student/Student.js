import React, { Component } from 'react';
import Axios from 'axios';

import {Link} from 'react-router-dom'

export default class Student extends Component {
  constructor() {
    super();
    this.state = {
      studentInfo: {}
    }
  }

  componentDidMount(){
    console.log(this.props.match.params)
    console.log(this.props)
    Axios.get(`http://localhost:3005/students/${this.props.match.params.id}`).then( (results) => {
      this.setState({
        studentInfo: results.data
      })
    })
  }

  goBack(){
    this.props.history.goBack()
  }

  render() {
    const {studentInfo} = this.state
    return (
      <div className="box">
        <h1>{studentInfo.first_name} {studentInfo.last_name} </h1>
        <h3>Grade: {studentInfo.grade}</h3>
        <h3>Email: {studentInfo.email}</h3>
        <button onClick={ () => this.goBack()}>Go back</button>
      </div>
    )
  }
}