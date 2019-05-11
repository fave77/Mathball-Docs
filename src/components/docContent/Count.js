import React, { Component } from "react";
import Highlight from 'react-highlight';
import 'highlight.js/styles/github.css'


export default class Count extends Component {
  render() {

    return (
			<div className="tab-pane fade" id="count" role="tabpanel" aria-labelledby="count-tab">

				<h1>Count</h1>
				<p><b>The M.count()</b> function returns the number of occurences of the second argument in the first argument.</p>

				<h3>Syntax</h3>
				<p><span>M.count (argument1, argument2)</span></p>

				<h3>Arguments1</h3>
				<p><span>Array String Object</span></p>

				<h3>Arguments2</h3>
				<p><span>Any datatype</span></p>

				<h3>Return</h3>
				<p><span>Number</span></p>

				<h3>Examples</h3>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`/*Arrays*/
M.count([1, 2, 3, 1, 2, 4, 5, 1], 1)   // 3
M.count(['a', 'y', 'a', 'b', 'c', 'z', 'i'], 'a')   // 2
M.count(['hello', 'world', 'lorem', 'ipsum', 'hello'], 'world');   // 1
M.count(['hello', 5, 'lorem', 7, 'ipsum', 'hello'], 'world');   // 0
M.count([true, 5, 'lorem', 7, 'ipsum', 'hello'], true);   // 1

/*Strings*/
M.count('banana', 'ana');   // 2
M.count('banana', 'an');    // 2
M.count('banana', 'a');     // 3

/*Objects*/
M.count({'lorem': 'ipsum', 'hello': 'world'}, 'world');    // 1
M.count({'foo': 'bar', 'spam': 'egg', 'lorem': 'bar'}, 'bar');   // 2
M.count({'ipsum': [true, 1]}, [true, 1]);    // 1`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`/*
 * TypeError: Invalid argument received: <argument>
 * 'count()' only accept an Array, String or an Object!
 */
M.count();
M.count(true);
M.count(23);

/*
 * TypeError: Invalid argument received: <argument>
 * 'count()' doesnot accept more than 2 parameters!
 */`}
				</Highlight>

				<h3>Info</h3>
				<p><span>Implemented using JavaScript's built-in <b>filter</b>, <b>hasOwnProperty</b>, <b>indexOf</b>, <b>keys</b> functions.</span></p>

			</div>
    );
  }
}

