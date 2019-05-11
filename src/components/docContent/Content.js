import React, { Component } from "react";
import Highlight from 'react-highlight';
import 'highlight.js/styles/github.css'


export default class Content extends Component {
  render() {

    return (
			<React.Fragment>

				<h1>{this.props.title}</h1>
				<p dangerouslySetInnerHTML={{ __html: this.props.description }}></p>

				<h3>Syntax</h3>
				{this.props.syntax.map((d, index) => (
					<p key={index}><span>{d}</span></p>
				))}

				<h3>Arguments</h3>
				{this.props.arguments.map((d, index) => (
					<p key={index}><span>{d}</span></p>
				))}

				<h3>Return</h3>
				{this.props.return.map((d, index) => (
					<p key={index}><span>{d}</span></p>
				))}

				<h3>Examples</h3>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{this.props.validCode}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{this.props.inValidCode}
				</Highlight>

				<h3>Info:</h3>
				<p dangerouslySetInnerHTML={{ __html: this.props.info }}></p>

			</React.Fragment>
    );
  }
}

