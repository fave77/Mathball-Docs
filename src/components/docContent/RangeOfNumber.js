import React, { Component } from "react";
import Highlight from 'react-highlight';
import 'highlight.js/styles/github.css'


export default class RangeOfNumber extends Component {
  render() {

    return (
			<div className="tab-pane fade" id="range-of-number" role="tabpanel" aria-labelledby="range-of-number-tab">

				<h1>Range</h1>
				<p>The <b>M.range()</b> takes a type of number as argument such as prime-numbers & returns all those numbers in the range provided as arguments , like <b>M.range('prime')(1,5)</b> will return all the prime numbers between 1 & 5.</p>

				<h3>Syntax</h3>
				<p><span>M.range('number-type')</span></p>

				<h3>Return</h3>
				<p><span>e.g. rangePrime rangePrime(m,n) will return all prime numbers between m & n.</span></p>

				<h3>Numbers Supported</h3>
				<ul>
					<li><a href="https://en.wikipedia.org/wiki/Palindromic_number" target="_blank" rel="noreferrer noopener">Palindrome</a></li>
					<li><a href="https://en.wikipedia.org/wiki/Prime_number" target="_blank" rel="noreferrer noopener">Prime</a></li>
				</ul>

				<h3>Examples</h3>
				<strong>Palindrome Numbers</strong>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const rangePalindrome = M.range('palindrome');
rangePalindrome(1,5);      // [1,2,3,4]
rangePalindrome(10,20);    // [11]
rangePalindrome(0,18);     // [0,1,2,3,4,5,6,7,8,9,11]`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`rangePalindrome([3, 4]);     //Typerror
rangePalindrome(true);       //Typerror
rangePalindrome(3.141718);   //Typerror`}
				</Highlight>

				<hr />

				<strong>Prime Numbers</strong>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const rangePrime = M.range('prime');
rangePrime(25);      // [ 2, 3, 5, 7, 11, 13, 17, 19, 23 ]
rangePrime(7);       // [ 2, 3, 5, 7 ]
rangePrime(14);      // [ 2, 3, 5, 7, 11, 13]`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`rangePrime("31");     //Typerror
rangePrime(true);     //Typerror
rangePrime(-20);     //Typerror`}
				</Highlight>

				<hr />

				<h3>Info:</h3>
				<p>Implemented using JavaScript's ability to export functions. Similar methods can be rangeed here: Find-nth-Number Number-Checker.</p>

			</div>
    );
  }
}

