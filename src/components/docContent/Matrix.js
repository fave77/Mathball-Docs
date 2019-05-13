import React, { Component } from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/github.css";


export default class Matrix extends Component {
  render() {

    return (
			<div className="tab-pane fade" id="matrix" role="tabpanel" aria-labelledby="matrix-tab">

				<h1>Matrix</h1>
				<p>The <b>M.Matrix()</b> function returns an object upon which various matrix-based operations can be performed.</p>

				<h3>Syntax</h3>
				<p><span>new M.Matrix([value1, value2, ...])</span></p>

				<h3>Arguments</h3>
				<p><span>{"Array <Number>"}</span></p>

				<h3>Return</h3>
				<p><span>Object</span></p>

				<h3>Examples</h3>
				<Highlight language="javascript" >
					{"const x = new M.Matrix([ [1, 2], [3, 4] ]);"}
				</Highlight>

				<h3>Info</h3>
				<p>Implemented using JavaScript's built-in <b>class</b></p>

				<h3>Methods</h3>
				<ul>
					<li><b>loc</b> - returns the element in the matrix of specified row and column number.</li>
					<li><b>diag</b> - returns array of numbers which contains either diagonal or anti-diagonal elements based on the argument.</li>
					<li><b>check</b> - returns a boolean on checking if matrix is square, identity, upper-triangular or lower-triangular.</li>
					<li><b>pow</b> - returns a matrix after multiplying the same matrix, the number of times provided as the argument.</li>
				</ul>

				<hr />

				<h3>Syntax</h3>
				<p><span>x.loc([value1, value2])</span></p>

				<h3>Arguments</h3>
				<p><span>{"<Row Number> , <Column Number>"}</span></p>

				<h3>Return</h3>
				<p><span>Number</span></p>

				<h3>Examples</h3>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const x = new M.Matrix([ [1, 2], [3, 4] ]);
x.loc(2, 1);   // 3
x.loc(1, 2);	 // 2`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`/*
* TypeError: Invalid argument received: <argument>
* 'loc()' only accept a positive integer!
*/
x.loc(0, 2);
x.loc(0, 0);
x.loc(2, -1);`}
				</Highlight>

				<h3>Info</h3>
				<p>Only positive numbers should be in the arguments, because that denotes the row and column number of a matrix.</p>

				<hr />

				<h3>Syntax</h3>
				<p><span>x.diag(value)</span></p>

				<h3>Arguments</h3>
				<p><span>{"<'primary'> or <'secondary'>"}</span></p>

				<h3>Return</h3>
				<p><span>{"Array <Number>"}</span></p>

				<h3>Examples</h3>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const x = new M.Matrix([ [1, 2], [3, 4] ]);
x.diag('primary');      // [1, 4]
x.diag('secondary');    // [2, 3]`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`/*
* TypeError: Invalid argument received: <argument>
* 'diag()' only returns diagonals of square matrices!
*/
const x = new M.Matrix([ [1, 2, 5], [3, 4] ]);
/*
* TypeError: Invalid argument received: <argument>
*/
x.diag('first');
x.diag('primar');
x.diag('secondary');`}
				</Highlight>

				<h3>Info</h3>
				<p>First it checks, if matrix is square, and then returns the diagonal as per the correct argument.</p>

				<hr />

				<h3>Syntax</h3>
				<p><span>x.check(value)</span></p>

				<h3>Arguments</h3>
				<p><span>{"<'square'> or <'identity'> or <'upper-triangular'> or <'lower-triangular'>"}</span></p>

				<h3>Return</h3>
				<p><span>Boolean</span></p>

				<h3>Examples</h3>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const x = new M.Matrix([ [1, 2], [3, 4] ]);
x.check('square');             // true
x.check('identity');           // false
x.check('upper-triangular');   // false
x.check('lower-triangular');   // false`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`/*
* TypeError: Invalid argument received: <argument>
* the matrix has to be square to check 'identity' property!
*/
const x = new M.Matrix([ [1, 2, 5], [3, 4] ]);
/*
* TypeError: Invalid argument received: <argument>
* the matrix has to be square to check 'upper-triangular' property!
*/
const x = new M.Matrix([ [1, 2, 5], [3, 4] ]);
/*
* TypeError: Invalid argument received: <argument>
* the matrix has to be square to check 'lower-triangular' property!
*/
const x = new M.Matrix([ [1, 2, 5], [3, 4] ]);`}
				</Highlight>

				<h3>Info</h3>
				<p>First it checks, if matrix is square, and then returns the diagonal as per the argument.</p>

				<hr />

				<h3>Syntax</h3>
				<p><span>x.pow(value)</span></p>

				<h3>Arguments</h3>
				<p><span>{"<Number>"}</span></p>

				<h3>Return</h3>
				<p><span>Matrix</span></p>

				<h3>Examples</h3>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const x = new M.Matrix([ [1, 2], [3, 4] ]);
x.pow(2);  // [ [7, 10], [15, 22] ]

const x = new M.Matrix([ [1] ]);
x.pow(3);  // [ [1] ]`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`/*
* TypeError: Invalid argument received: <argument>
* 'pow()' only accept a positive integer!
*/
x.pow(-2)
x.pow(0)`}
				</Highlight>

				<h3>Info</h3>
				<p>Implemented using <b>matrixExponentiation()</b> function.</p>

				<hr />

				<h3>Additional</h3>
				<h3>Matrix Chain Order</h3>
				<p><span>Matrix Chain Order returns the minimum number of multiplications required when the dimension of matrices are provided in order for finding the most efficient way to multiply these matrices together.</span></p>

				<h3>Syntax</h3>
				<p><span>M.Matrix.chainOrder([value1, value2, ...])</span></p>

				<h3>Arguments</h3>
				<p><span>{"Array <Number>"}</span></p>

				<h3>Return</h3>
				<p><span>Number</span></p>

				<h3>Examples</h3>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`M.Matrix.chainOrder([40, 20, 30, 10])  //14000
M.Matrix.chainOrder([40, 20, 30, 10, 30]);  // 26000`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`/*
* TypeError: Invalid argument received: <argument>
* 'chainOrder()' only accept a positive integer!
*/
M.Matrix.chainOrder(12) //Error: not an array
M.Matrix.chainOrder([10, -20, 40, 10]) //Error: not positive integers`}
				</Highlight>

				<h3>Info</h3>
				<p>Only positive numbers should be in the array, because that denotes the number of rows in a matrix.</p>

			</div>
    );
  }
}

