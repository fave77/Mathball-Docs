import React, { Component } from "react";
import Highlight from 'react-highlight';
import 'highlight.js/styles/github.css'


export default class Stack extends Component {
  render() {

    return (
			<div className="tab-pane fade" id="stack" role="tabpanel" aria-labelledby="stack-tab">

				<h1>Stack</h1>
				<p>The <b>M.Stack()</b> function returns an object upon which various stack-based operations can be performed.</p>

				<h3>Syntax</h3>
				<p><span>new M.Stack()</span></p>

				<h3>Arguments</h3>
				<p><span>None</span></p>

				<h3>Return</h3>
				<p><span>Object</span></p>

				<h3>Examples</h3>
				<Highlight language="javascript" >
					{
`const s = new M.Stack();
console.log(s);   // Stack { stack: [] }`}
				</Highlight>

				<h3>Info</h3>
				<p>Implemented using JavaScript's built-in <b>class</b></p>

				<h3>Methods</h3>
				<ul>
					<li><b>push</b> - This method adds an element at the top of the stack.</li>
					<li><b>pop</b> - This method returns the topmost element of stack and removes it. Returns underflow when called on an empty stack.</li>
					<li><b>isEmpty</b> - Returns true if the stack is empty.</li>
					<li><b>head</b> - Returns the topmost element of the stack. If stack is empty returns Empty Stack.</li>
					<li><b>size</b> - Returns the length of the stack.</li>
					<li><b>copy</b> - Returns a copy passed stack object.</li>
					<li><b>display</b> - Prints all the elements of the stack in LIFO order.</li>
				</ul>

				<hr />

				<h3>Syntax</h3>
				<p><span>s.push(value)</span></p>

				<h3>Arguments</h3>
				<p><span>Number</span></p>

				<h3>Return</h3>
				<p><span>None</span></p>

				<h3>Examples</h3>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const s = new M.Stack();
s.push(10);
s.push(20);
s.push(30);`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`/*
* TypeError: Invalid argument received: <argument>
* 'Stack.push()' only accept a number!
*/
s.push("40");
s.push("ten");
s.push([10,20]);`}
				</Highlight>

				<h3>Info</h3>
				<p>Implemented using JavaScript's built-in <b>push</b> function.</p>

				<hr />

				<h3>Syntax</h3>
				<p><span>s.pop()</span></p>

				<h3>Arguments</h3>
				<p><span>None</span></p>

				<h3>Return</h3>
				<p><span>Number</span></p>

				<h3>Examples</h3>
				<Highlight language="javascript" >
					{
`const s=new M.Stack();
s.push(10);
s.push(20);
s.push(30);
console.log(s.pop())   // 30

const s=new M.Stack();
s.push(10);
console.log(s.pop())   // 10`}
				</Highlight>

				<h3>Info</h3>
				<p>Implemented using JavaScript's built-in <b>pop</b> function.</p>

				<hr />

				<h3>Syntax</h3>
				<p><span>s.isEmpty()</span></p>

				<h3>Arguments</h3>
				<p><span>None</span></p>

				<h3>Return</h3>
				<p><span>Boolean</span></p>

				<h3>Examples</h3>
				<Highlight language="javascript" >
					{
`const s=new M.Stack();
s.push(10);
s.push(20);
s.push(30);
console.log(s.isEmpty());   // false

const s1=new M.Stack();
s1.push(10);
s1.pop();
console.log(s1.isEmpty());   // true`}
				</Highlight>

				<h3>Info</h3>
				<p>Implemented using JavaScript's built-in <b>size</b> function.</p>

				<hr />

				<h3>Syntax</h3>
				<p><span>s.head()</span></p>

				<h3>Arguments</h3>
				<p><span>None</span></p>

				<h3>Return</h3>
				<p><span>Number</span></p>

				<h3>Examples</h3>
				<Highlight language="javascript" >
					{
`const s=new M.Stack();
s.push(10);
s.push(20);
s.push(30);
console.log(s.head());   // 30

const s1=new M.Stack();
s1.push(10);
s1.pop()
console.log(s1.head());   // Empty Stack

const s2=new M.Stack();
console.log(s2.head());   // Empty Stack`}
				</Highlight>

				<h3>Info</h3>
				<p>Implemented using JavaScript's built-in <b>size</b> function.</p>

				<hr />

				<h3>Syntax</h3>
				<p><span>s.size()</span></p>

				<h3>Arguments</h3>
				<p><span>None</span></p>

				<h3>Return</h3>
				<p><span>Number</span></p>

				<h3>Examples</h3>
				<Highlight language="javascript" >
					{
`const s=new M.Stack();
s.push(10);
s.push(20);
s.push(30);
console.log(s.size());   // 3

const s1=new M.Stack();
console.log(s1.size());   // 0`}
				</Highlight>

				<h3>Info</h3>
				<p>Implemented using JavaScript's built-in <b>size</b> function.</p>

				<hr />

				<h3>Syntax</h3>
				<p><span>s.copy()</span></p>

				<h3>Arguments</h3>
				<p><span>None</span></p>

				<h3>Return</h3>
				<p><span>Object</span></p>

				<h3>Examples</h3>
				<Highlight language="javascript" >
					{
`const s1=new M.Stack();
s1.push(10);
s1.push(20);
const s=s1.copy();
console.log(s);   // Stack { stack: [ 10, 20 ] }
console.log(s.size());   // 2`}
				</Highlight>

				<h3>Info</h3>
				<p>Implemented using JavaScript's built-in <b>size</b> function.</p>

				<hr />

				<h3>Syntax</h3>
				<p><span>s.display()</span></p>

				<h3>Arguments</h3>
				<p><span>None</span></p>

				<h3>Return</h3>
				<p><span>String</span></p>

				<h3>Examples</h3>
				<Highlight language="javascript" >
					{
`const s=new M.Stack();
s.push(10);
s.push(20)
s.push(30)
console.log(s.display());   // 30 20 10`}
				</Highlight>

				<h3>Info</h3>
				<p>Implemented using JavaScript's built-in <b>reverse</b> and <b>join</b> function.</p>

			</div>
    );
  }
}

