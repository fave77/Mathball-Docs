import React, { Component } from "react";
import Highlight from "react-highlight";
import ";highlight.js/styles/github.css";


export default class FindnthNumber extends Component {
  render() {

    return (
			<div className="tab-pane fade" id="find-nth-number" role="tabpanel" aria-labelledby="find-nth-number-tab">

				<h1>Find</h1>
				<p>The <b>M.find()</b> function returns the nth number of the type specified , like if the argument passed to <b>M.find()</b> is factorial, then <b>M.find('factorial')(5)</b> will return 120.</p>

				<h3>Syntax</h3>
				<p><span>M.find('number-type')</span></p>

				<h3>Return</h3>
				<p><span>e.g. num num(n) will return the nth-number!</span></p>

				<h3>Return</h3>
				<ul>
					<li><a href="https://en.wikipedia.org/wiki/Bell_number" target="_blank" rel="noreferrer noopener">bell</a></li>
					<li><a href="https://en.wikipedia.org/wiki/Catalan_number" target="_blank" rel="noreferrer noopener">Catalan</a></li>
					<li><a href="https://en.wikipedia.org/wiki/Factorial" target="_blank" rel="noreferrer noopener">Factorial</a></li>
					<li><a href="https://en.wikipedia.org/wiki/Fibonacci_number" target="_blank" rel="noreferrer noopener">Fibonacci</a></li>
					<li><a href="https://en.wikipedia.org/wiki/Hexagonal_number" target="_blank" rel="noreferrer noopener">hexagonal</a></li>
					<li><a href="https://en.wikipedia.org/wiki/Magic_number_(programming)" target="_blank" rel="noreferrer noopener">magic</a></li>
					<li><a href="https://en.wikipedia.org/wiki/Padovan_sequence" target="_blank" rel="noreferrer noopener">padovan</a></li>
					<li><a href="https://en.wiktionary.org/wiki/prime_factor" target="_blank" rel="noreferrer noopener">prime-factor</a></li>
					<li><a href="https://en.wikipedia.org/wiki/Smart_number" target="_blank" rel="noreferrer noopener">smart</a></li>
					<li><a href="https://en.wikipedia.org/wiki/Triangular_number" target="_blank" rel="noreferrer noopener">triangular</a></li>
					<li><a href="https://www.geeksforgeeks.org/ugly-numbers" target="_blank" rel="noreferrer noopener">ugly</a></li>
				</ul>

				<h3>Examples</h3>
				<p><strong>Bell Numbers</strong></p>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const bell = M.find('bell');
bell(2);     // 2
bell(4);    // 15
bell(5);   // 52`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`bell([3, 4]);     //Typerror
bell(true);      //Typerror
bell(3.141718); //Typerror`}
				</Highlight>

				<hr />

				<p><strong>Catalan Numbers</strong></p>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const catalan = M.find('catalan');
catalan(2);     // 2
catalan(3);    // 5
catalan(5);   // 42`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`catalan("31");     //Typerror
catalan(true);     //Typerror
catalan(-20);     //Typerror`}
				</Highlight>

				<hr />

				<p><strong>Factorial</strong></p>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const factorial = M.find('factorial');
factorial(2);     // 2
factorial(4);    // 24
factorial(5);   // 120`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`factorial([3, 4]);     //Typerror
factorial(true);      //Typerror
factorial(3.141718); //Typerror`}
				</Highlight>

				<hr />

				<p><strong>Fibonacci Number</strong></p>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const fibonacci = M.find('fibonacci');
fibonacci(0);     // 0
fibonacci(7);    // 13
fibonacci(9);   // 34`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`fibonacci([3, 4]);     //Typerror
fibonacci(true);      //Typerror
fibonacci(3.141718); //Typerror`}
				</Highlight>

				<hr />

				<p><strong>Hexagonal Number</strong></p>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const hexagonal = M.find('hexagonal');
hexagonal(6);     // 66
hexagonal(15);    // 435
hexagonal(10);   // 190`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`hexagonal(-20);     //Typerror
hexagonal(true);      //Typerror
hexagonal(3.141718); //Typerror`}
				</Highlight>

				<hr />

				<p><strong>Magic Number</strong></p>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const magic = M.find('magic');
magic(2);     // 25
magic(4);    // 125
magic(5);   // 130`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`magic([3, 4]);     //Typerror
magic(true);      //Typerror
magic(3.141718); //Typerror`}
				</Highlight>

				<hr />

				<p><strong>Padovan Number</strong></p>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const padovan = M.find('padovan');
padovan(6);     // 4
padovan(15);    // 49
padovan(12);   // 21`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`padovan([3, 4]);     //Typerror
padovan(true);      //Typerror
padovan(3.141718); //Typerror`}
				</Highlight>

				<hr />

				<p><strong>Prime Factors</strong></p>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const primeFactors = M.find('prime-factor');
primeFactors(2);     // [2]
primeFactors(101);    // [101]
primeFactors(100);   //  [2, 2, 5, 5]`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`primeFactors([3, 4]);     //Typerror
primeFactors(true);      //Typerror
primeFactors(3.141718); //Typerror`}
				</Highlight>

				<hr />

				<p><strong>Smart Number</strong></p>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const smart = M.find('smart');
smart(1);        // 30
smart(1000);    // 2664
smart(50);      // 273`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`smart([3, 4]);     //Typerror
smart(true);      //Typerror
smart(3.141718); //Typerror`}
				</Highlight>

				<hr />

				<p><strong>Triangular</strong></p>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const triangular = M.find('triangular');
triangular(2);     // 3
triangular(4);    // 10
triangular(5);   // 15`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`triangular([3, 4]);    //Typerror
triangular(true);      //Typerror
triangular(3.141718);  //Typerror`}
				</Highlight>

				<hr />

				<p><strong>Ugly Number</strong></p>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const ugly = M.find('ugly');
ugly(2);     // 2
ugly(4);     // 15
ugly(5);     // 52`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`ugly([3, 4]);     //Typerror
ugly(true);      //Typerror
ugly(3.141718); //Typerror`}
				</Highlight>

				<hr />

				<h3>Info:</h3>
				<p>Implemented using JavaScript's ability to export functions. Similar methods can be checked here: Number Checker Range of Number.</p>

			</div>
    );
  }
}

