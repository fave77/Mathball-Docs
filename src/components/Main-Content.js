import React, { Component } from 'react';
import '../stylesheets/main-content.css';

class MainContent extends Component {
  render() {
    return (
      <div id = "mainContent" className = "container-fluid main-content">
      <div className = "row">
        <div className = "sub-content col-lg- 12 col-md-12 col-sm-12">
        <h4>Introductions</h4>
          <p>
          <b>Mathball</b>  is a JavaScript library for competitive programming, implementing optimized algorithms for faster execution.
          </p>
          <p>
          JavaScript was never built while keeping competitive coding in mind; let us all agree on that. Back in 1995, Brendan Eich developed JavaScript only for adding interactivity to web pages like handling a mouse click. Today, we can build servers, games, mobile apps, IoT apps and even machine learning in the browser is possible with JavaScript.
          </p>
          <blockquote>
          Any application that can be written in JavaScript, will eventually be written in JavaScript. -- Atwood &#39;s Law
          </blockquote>
          <p>Hence, I believe maybe its time for people who are well versed with this particular language to finally consider using it in the realm of competitive programming as well.</p>
        </div>
        </div>
        <h4 style = {{textAlign: "center"}}>Features</h4>
        <div className = "features row">

          <div className = "sub-content  col-lg-4 col-md-4 col-sm-12">
          <div class="card">
              <div class="card-header">
                <b>Number Checkers</b>
                </div>
            <div class="card-body">
            <p class="card-text">
              <a href = "https://github.com/pbiswas101/Mathball/blob/master/src/armstrong/index.js" target = "_blank" rel = "noreferrer noopener">Armstrong Number</a><br/>
              <a href = "https://github.com/pbiswas101/Mathball/blob/master/src/automorphic/index.js" target = "_blank" rel = "noreferrer noopener">Automorphic Number</a><br/>
              <a href = "https://github.com/pbiswas101/Mathball/blob/master/src/carmichael/index.js" target = "_blank" rel = "noreferrer noopener">Carmichael Number</a><br/>
              <a href = "https://github.com/pbiswas101/Mathball/blob/master/src/isDeficient/index.js" target = "_blank" rel = "noreferrer noopener">Deficient Number</a><br/>
              <a href = "https://github.com/pbiswas101/Mathball/blob/master/src/isFrugal/index.js" target = "_blank" rel = "noreferrer noopener">Frugal Number</a><br/>
            </p>
            <a href="#Features Page" class="features-link">See all Number Checkers <i class="fas fa-angle-right"></i></a>
          </div>
          </div>
        </div>

        <div className = "sub-content col-lg-4  col-md-4 col-sm-12">

        <div class="card">
            <div class="card-header">
              <b>Find nth Number</b>
              </div>
          <div class="card-body">
          <p class="card-text">
            <a href = "https://github.com/pbiswas101/Mathball/blob/master/src/bell/index.js" target = "_blank" rel = "noreferrer noopener">Bell Number</a><br/>
            <a href = "https://github.com/pbiswas101/Mathball/blob/master/src/catalan/index.js" target = "_blank" rel = "noreferrer noopener">Catalan Number</a><br/>
            <a href = "https://github.com/pbiswas101/Mathball/blob/master/src/factorial/index.js" target = "_blank" rel = "noreferrer noopener">Factorial of a Number</a><br/>
            <a href = "https://github.com/pbiswas101/Mathball/blob/master/src/nCr/index.js" target = "_blank" rel = "noreferrer noopener">Combinations of a Number(nCr)</a><br/>
            <a href = "https://github.com/pbiswas101/Mathball/blob/master/src/fibonacci/index.js" target = "_blank" rel = "noreferrer noopener">Fibonacci Number</a><br/>
          </p>
          <a href="#Features Page" class="features-link">See all nth Numbers <i class="fas fa-angle-right"></i></a>
        </div>
        </div>
        </div>

        <div className = "sub-content col-lg-4  col-md-4 col-sm-12">
        <div class="card">
            <div class="card-header">
              <b>Range of Numbers</b>
              </div>
          <div class="card-body">
          <p class="card-text">
            <a href = "https://github.com/pbiswas101/Mathball/blob/master/src/prime/index.js" target = "_blank" rel = "noreferrer noopener">rangePrime</a><br/>
            <a href = "https://github.com/pbiswas101/Mathball/blob/master/src/fibonacci/index.js" target = "_blank" rel = "noreferrer noopener">rangeFibonacci</a><br/>
            <a href = "https://github.com/pbiswas101/Mathball/blob/master/src/palindrome/index.js" target = "_blank" rel = "noreferrer noopener">rangePalindrome</a><br/>
          </p>
        </div>
        </div>
        </div>
      </div>
      <div className= "features row">
        <div className = "sub-content  col-lg-4 col-md-4 col-sm-12">
        <div class="card">
            <div class="card-header">
              <b>Mathematical Utilities</b>
          </div>
      <div class="card-body">
      <p class="card-text">
        <a href = "https://github.com/pbiswas101/Mathball/blob/master/src/complex/index.js" target = "_blank" rel = "noreferrer noopener">Complex Numbers</a><br/>
            <a href = "https://github.com/pbiswas101/Mathball/blob/master/src/frequency/index.js" target = "_blank" rel = "noreferrer noopener">Frequency of Number</a><br/>
            <a href = "https://github.com/pbiswas101/Mathball/blob/master/src/gcd/index.js" target = "_blank" rel = "noreferrer noopener">Greatest Common Divisor(gcd)</a><br/>
            <a href = "https://github.com/pbiswas101/Mathball/blob/master/src/isEven/index.js" target = "_blank" rel = "noreferrer noopener">Even Numbers</a><br/>
            <a href = "https://github.com/pbiswas101/Mathball/blob/master/src/isOdd/index.js" target = "_blank" rel = "noreferrer noopener">Odd Numbers</a><br/>
          </p>
          <a href="#Features Page" class="features-link">See all Mathematical Utilities <i class="fas fa-angle-right"></i></a>
        </div>
        </div>
      </div>

      <div className = "sub-content col-lg-4  col-md-4 col-sm-12">

      <div class="card">
          <div class="card-header">
            <b>Data Structures</b>
            </div>
        <div class="card-body">
        <p class="card-text">
          <a href = "https://github.com/pbiswas101/Mathball/blob/master/src/PriorityQueue/index.js" target = "_blank" rel = "noreferrer noopener">Priority Queue</a><br/>
        </p>
      </div>
      </div>
      </div>

      <div className = "sub-content col-lg-4  col-md-4 col-sm-12">
      <div class="card">
          <div class="card-header">
            <b>Helper Methods</b>
            </div>
        <div class="card-body">
        <p class="card-text">
          <a href = "https://github.com/pbiswas101/Mathball/blob/master/src/performance/index.js" target = "_blank" rel = "noreferrer noopener">Performance</a><br/>
          <a href = "https://github.com/pbiswas101/Mathball/blob/master/src/pipe/index.js" target = "_blank" rel = "noreferrer noopener">Pipe</a><br/>
        </p>
      </div>
      </div>
      </div>
    </div>
</div>

    );
  }
}

export default MainContent;
