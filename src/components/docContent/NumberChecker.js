import React, { Component } from "react";
import Highlight from 'react-highlight';
import 'highlight.js/styles/github.css'


export default class NumberChecker extends Component {
  render() {

    return (
			<div className="tab-pane fade" id="number-checker" role="tabpanel" aria-labelledby="number-checker-tab">

				<h1>Check</h1>
				<p>The <b>M.check()</b> function returns the decision whether the number is a type of number given as argument to `M.check() function.</p>

				<h3>Syntax</h3>
				<p><span>M.check('number-type')</span></p>

				<h3>Return</h3>
				<p><span>e.g. armstrong armstrong(n) will return whether n is armstrong or not!</span></p>

				<h3>Numbers Supported</h3>
				<ul>
					<li><a href="https://en.wikipedia.org/wiki/Narcissistic_number" target="_blank" rel="noreferrer noopener">armstrong</a></li>
					<li><a href="https://en.wikipedia.org/wiki/Automorphic_number" target="_blank" rel="noreferrer noopener">automorphic</a></li>
					<li><a href="https://en.wikipedia.org/wiki/Carmichael_number" target="_blank" rel="noreferrer noopener">Carmichael</a></li>
					<li><a href="https://en.wikipedia.org/wiki/Deficient_number" target="_blank" rel="noreferrer noopener">deficient</a></li>
					<li><a href="https://simple.wikipedia.org/wiki/Even_number" target="_blank" rel="noreferrer noopener">Even</a></li>
					<li><a href="https://en.wikipedia.org/wiki/Fibonacci_coding" target="_blank" rel="noreferrer noopener">fibbinary</a></li>
					<li><a href="https://en.wikipedia.org/wiki/Harshad_number" target="_blank" rel="noreferrer noopener">Harshad</a></li>
					<li><a href="https://www.geeksforgeeks.org/hoax-number" target="_blank" rel="noreferrer noopener">Hoax</a></li>
					<li><a href="https://en.wikipedia.org/wiki/Kaprekar_number" target="_blank" rel="noreferrer noopener">Kaprekar</a></li>
					<li><a href="https://en.wikipedia.org/wiki/Lucky_number" target="_blank" rel="noreferrer noopener">Lucky</a></li>
					<li><a href="https://www.geeksforgeeks.org/neon-number" target="_blank" rel="noreferrer noopener">Neon</a></li>
					<li><a href="https://simple.wikipedia.org/wiki/Odd_number" target="_blank" rel="noreferrer noopener">odd</a></li>
					<li><a href="https://en.wikipedia.org/wiki/Palindromic_number" target="_blank" rel="noreferrer noopener">palindrome</a></li>
					<li><a href="https://en.wikipedia.org/wiki/Perfect_number" target="_blank" rel="noreferrer noopener">perfect</a></li>
					<li><a href="https://en.wikipedia.org/wiki/Prime_number" target="_blank" rel="noreferrer noopener">prime</a></li>
					<li><a href="https://en.wikipedia.org/wiki/Smith_number" target="_blank" rel="noreferrer noopener">smith</a></li>
					<li><a href="https://en.wikipedia.org/wiki/St%C3%B8rmer_number" target="_blank" rel="noreferrer noopener">stormer</a></li>
				</ul>

				<h3>Examples</h3>
				<strong>Armstrong Numbers</strong>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const isArmstrong = M.check('armstrong');
isArmstrong(153);    // true
isArmstrong(4);      // false
isArmstrong(522);    // false`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`isArmstrong([3, 4]);    //Typerror
isArmstrong(true);      //Typerror
isArmstrong(3.141718);  //Typerror`}
				</Highlight>

				<hr />

				<strong>Automorphic Numbers</strong>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const isAutomorphic = M.check('automorphic');
isAutomorphic(25);    // true
isAutomorphic(7);     // false
isAutomorphic(14);    // false`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`isAutomorphic("31");     //Typerror
isAutomorphic(true);     //Typerror
isAutomorphic(-20);     //Typerror`}
				</Highlight>

				<hr />

				<strong>Carmichael Number</strong>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const isCarmichael = M.heck('carmichael');
isCarmichael(561);    // true
isCarmichael(8);      // false
isCarmichael(1105);   // true`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`isCarmichael([3, 4]);     //Typerror
isCarmichael(true);      //Typerror
isCarmichael(3.141718); //Typerror`}
				</Highlight>

				<hr />

				<strong>deficient Number</strong>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const deficient = M.check('deficient');
deficient(10);   //true
deficient(1);   //true
deficient(6);   //false`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`deficient([3, 4]);     //Typerror
deficient(true);      //Typerror
deficient(3.141718); //Typerror`}
				</Highlight>

				<hr />

				<strong>Even Number</strong>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const isEven = M.check('even');
isEven(6);    //true
isEven(15);   //false
isEven(10);   //true`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`isEven("20");     //Typerror
isEven(true);     //Typerror
isEven([3,45]);   //Typerror`}
				</Highlight>

				<hr />

				<strong>Fibbinary Number</strong>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const fibbinary = M.check('fibbinary');
fibbinary(10);     // true
fibbinary(4);      // false
fibbinary(63);     // false`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`fibbinary([3, 4]);     //Typerror
fibbinary(true);       //Typerror
fibbinary(1.141718);   //Typerror`}
				</Highlight>

				<hr />

				<strong>Harshad Number</strong>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const isHarshad = M.check('harshad');
isHarshad(18);     // true
isHarshad(23);     // false
isHarshad(15);     // false`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`isHarshad([3, 4]);     //Typerror
isHarshad(true);       //Typerror
isHarshad(3.141718);   //Typerror`}
				</Highlight>

				<hr />

				<strong>Hoax Number</strong>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const hoax = M.check('hoax');
hoax(84);     // true
hoax(15);     // false
hoax(3);      // false `}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`hoax([3, 4]);     //Typerror
hoax(true);      //Typerror
hoax(3.141718); //Typerror`}
				</Highlight>

				<hr />

				<strong>Kaprekar Number</strong>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const isKaprekar = M.check('kaprekar');
isKaprekar(9);       // true
isKaprekar(13);      // false
isKaprekar(44);      // false`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`isKaprekar([3, 4]);    //Typerror
isKaprekar(true);      //Typerror
isKaprekar(3.141718);  //Typerror`}
				</Highlight>

				<hr />

				<strong>Lucky Number</strong>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const isLucky = M.check('lucky');
isLucky(13);    // true
isLucky(2);    // false
isLucky(5);    // false`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`isLucky([3, 4]);    //Typerror
isLucky(true);      //Typerror
isLucky(3.141718);  //Typerror`}
				</Highlight>

				<hr />

				<strong>Neon Number</strong>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const neon = M.check('neon');
neon(9);      // true
neon(12);     // false
neon(5);      // false`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`neon([3, 4]);     //Typerror
neon(true);      //Typerror
neon(3.141718); //Typerror`}
				</Highlight>

				<hr />

				<strong>Odd Number</strong>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const isOdd = M.check('odd');
isOdd(9);      // true
isOdd(12);     // false
isOdd(52);      // false`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`isOdd([3, 4]);     //Typerror
isOdd(true);      //Typerror
isOdd(3.141718); //Typerror`}
				</Highlight>

				<hr />

				<strong>Palindrome Number</strong>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const ispalindrome = M.check('palindrome');
ispalindrome(191);      // true
ispalindrome(122);     // false
ispalindrome(522);      // false`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`ispalindrome([3, 4]);     //Typerror
ispalindrome(true);      //Typerror
ispalindrome(3.141718); //Typerror`}
				</Highlight>

				<hr />

				<strong>Perfect Number</strong>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const perfect = M.find('perfect');
perfect(6);    // true
perfect(15);   // false
perfect(4);    // false`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`perfect([3, 4]);     //Typerror
perfect(true);       //Typerror
perfect(3.141718);   //Typerror`}
				</Highlight>

				<hr />

				<strong>Prime Number</strong>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const isPrime = M.find('prime');
isPrime(2);       // true
isPrime(7);       // true
isPrime(50);      // false`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`isPrime([3, 4]);      //Typerror
isPrime(true);        //Typerror
isPrime(3.141718);    //Typerror`}
				</Highlight>

				<hr />

				<strong>Smith Number</strong>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const smith = M.find('smith');
smith(666);    // true
smith(4);      // true
smith(13);     // false`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`smith([3, 4]);    //Typerror
smith(true);      //Typerror
smith(3.141718);  //Typerror`}
				</Highlight>

				<hr />

				<strong>Stormer Number</strong>
				<p><i>Valid:</i></p>
				<Highlight language="javascript" >
					{
`const stormer = M.find('stormer');
stormer(11);     // true
stormer(1);      // true
stormer(7);      // false`}
				</Highlight>

				<p><i>Invalid:</i></p>
				<Highlight language="javascript" >
					{
`stormer([3, 4]);     //Typerror
stormer(true);      //Typerror
stormer(3.141718); //Typerror`}
				</Highlight>

				<hr />

				<h3>Info:</h3>
				<p>Implemented using JavaScript's ability to export functions. Similar methods can be checked here: Find-nth-Number Range of Number.</p>

			</div>
    );
  }
}

