import React, { Component } from "react";
import "../stylesheets/main-content.css";

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

          <div className = "sub-content  col-lg-6 col-md-6 col-sm-12">
          <div class="card">
              <div class="card-header">
                <b>Numbers&#39; Problems</b>
                </div>
            <div class="card-body">
            <p class="card-text">
              <a href = "https://github.com/pbiswas101/Mathball/blob/master/src/armstrong/index.js" target = "_blank" rel = "noreferrer noopener">Complex Number</a><br/>
              <a href = "https://github.com/pbiswas101/Mathball/tree/master/docs" target = "_blank" rel = "noreferrer noopener">Find nth Number</a><br/>
              <a href = "https://github.com/pbiswas101/Mathball/tree/master/docs" target = "_blank" rel = "noreferrer noopener">Number Checker</a><br/>
              <a href = "https://github.com/pbiswas101/Mathball/tree/master/docs" target = "_blank" rel = "noreferrer noopener">Range of Number</a>
              </br>
            </p>
            <a href="https://github.com/pbiswas101/Mathball/tree/master/docs" class="features-link" target = "_blank" rel = "noreferrer noopener">See all Numbers&#39; Problems <i class="fas fa-angle-right"></i></a>
          </div>
          </div>
        </div>

        <div className = "sub-content col-lg-6  col-md-6 col-sm-12">

        <div class="card">
            <div class="card-header">
              <b>Helper Functions</b>
              </div>
          <div class="card-body">
          <p class="card-text">
          <a href = "https://github.com/pbiswas101/Mathball/blob/master/src/performance/index.js" target = "_blank" rel = "noreferrer noopener">Performance</a><br/>
          <a href = "https://github.com/pbiswas101/Mathball/blob/master/src/pipe/index.js" target = "_blank" rel = "noreferrer noopener">Pipe</a><br/>
        </p>
	       <a href="https://github.com/pbiswas101/Mathball/tree/master/docs" class="features-link" target = "_blank" rel = "noreferrer noopener">See all Helper Funtions <i class="fas fa-angle-right"></i></a>
        </div>
        </div>
        </div>

      </div>

      <div className= "features row">
        <div className = "sub-content  col-lg-6 col-md-6 col-sm-12">
        <div class="card">
            <div class="card-header">
          <b>Core Tools</b>
              </div>
          <div class="card-body">
          <p class="card-text">
            <a href = "https://github.com/pbiswas101/Mathball/tree/master/docs" target = "_blank" rel = "noreferrer noopener">Absolute</a><br/>
            <a href = "https://github.com/pbiswas101/Mathball/tree/master/docs" target = "_blank" rel = "noreferrer noopener">Add</a><br/>
            <a href = "https://github.com/pbiswas101/Mathball/tree/master/docs" target = "_blank" rel = "noreferrer noopener">Average</a><br/>
	    <a href = "https://github.com/pbiswas101/Mathball/tree/master/docs" target = "_blank" rel = "noreferrer noopener">Binomial Coefficient</a><br/>
	   <a href = "https://github.com/pbiswas101/Mathball/tree/master/docs" target = "_blank" rel = "noreferrer noopener">Convert</a><br/>
	   <a href = "https://github.com/pbiswas101/Mathball/tree/master/docs" target = "_blank" rel = "noreferrer noopener">Count</a><br/>
	  <a href = "https://github.com/pbiswas101/Mathball/tree/master/docs" target = "_blank" rel = "noreferrer noopener">Divide</a><br/>
          </p>
          <a href="#Features Page" class="features-link" target = "_blank" rel = "noreferrer noopener">See all Core Tools <i class="fas fa-angle-right"></i></a>
        </div>
        </div>
      </div>

      <div className = "sub-content col-lg-6  col-md-6 col-sm-12">

      <div class="card">
          <div class="card-header">
            <b>Data Structures</b>
            </div>
        <div class="card-body">
        <p class="card-text">
          <a href = "https://github.com/pbiswas101/Mathball/blob/master/src/PriorityQueue/index.js" target = "_blank" rel = "noreferrer noopener">Priority Queue</a><br/>
          <a href = "https://github.com/pbiswas101/Mathball/blob/master/src/PriorityQueue/index.js" target = "_blank" rel = "noreferrer noopener">Matrix</a>
          <br/>
       <a href = "https://github.com/pbiswas101/Mathball/blob/master/src/PriorityQueue/index.js" target = "_blank" rel = "noreferrer noopener">Stack</a><br/>
	  <a href = "https://github.com/pbiswas101/Mathball/blob/master/src/PriorityQueue/index.js" target = "_blank" rel = "noreferrer noopener">Graph</a><br/>
	  <a href = "https://github.com/pbiswas101/Mathball/blob/master/src/PriorityQueue/index.js" target = "_blank" rel = "noreferrer noopener">Binary Tree</a><br/>
        </p>
	<a href="#Features Page" target = "_blank" rel = "noreferrer noopener" class="features-link">See all Data Structures <i class="fas fa-angle-right"></i></a>
      </div>
      </div>
      </div>

    </div>
</div>

    );
  }
}

export default MainContent;
