import React, { Component } from 'react';
import resume from '../../files/resume.pdf';

class Resume extends Component {

  render() {

    return (
        <div className = "App">
          <a href = {resume} target = "_blank">Resume</a>
        </div>
    );

  }
}

export default Resume;