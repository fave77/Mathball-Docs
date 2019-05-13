import React, { Component } from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/github.css";


export default class Graph extends Component {
  render() {

    return (
			<div className="tab-pane fade" id="graph" role="tabpanel" aria-labelledby="graph-tab">

				<h1>Graph</h1>
				<p>The <b>M.Graph()</b> function returns an object upon which various Graph-based operations can be performed.</p>

				<h3>Syntax</h3>
				<p><span>new M.Graph(noOfVertices)</span></p>

				<h3>Arguments</h3>
				<p><span>Number</span></p>

				<h3>Return</h3>
				<p><span>Object</span></p>

				<h3>Examples</h3>
				<Highlight language="javascript" >
					{
`const g = new M.Graph(6);
console.log(g);   // Graph { noOfVertices: 6, Adjlist: Map {} }`}
				</Highlight>

				<h3>Info</h3>
				<p><span>Implemented using JavaScript"s built-in <b>class</b></span></p>

				<h3>Methods</h3>
				<ul>
					<li><b>addVertex</b> - This method adds the vertex as key to the Adjacent List and initializes its values with an array.</li>
					<li><b>addEdge</b> - This adds an edge between the source and destination.</li>
					<li><b>printGraph</b> - This method returns vertices and its adjacency list.</li>
					<li><b>removeVertex</b> - This method removes the vertex passed as argument. If list is empty, returns <strong>Empty Graph</strong>.</li>
					<li><b>removeEdge</b> - This method removes the edge between the source and destination. If list is empty, returns <strong>Empty Graph</strong>. Returns <strong>Vertex does not exist in the Graph</strong> if vertex name is not found. Returns <strong>Edge not found!</strong> if edge does not exist between source and destination.</li>
					<li><b>bfs</b> - This method performs Breadth First Search from the given starting node.</li>
				</ul>

				<hr />

				<h3>Syntax</h3>
				<p><span>g.addVertex(vertex)</span></p>

				<h3>Arguments</h3>
				<p><span>Number/String</span></p>

				<h3>Return</h3>
				<p><span>Object</span></p>

				<h3>Examples</h3>
				<Highlight language="javascript" >
					{
`const M=require("mathball");
const g=new M.Graph(1);
console.log(g.addVertex("A"));   // Graph { noOfVertices: 1, Adjlist: Map { "A" => [] } }

const g1=new M.Graph(3);
const vertices = [ "A", "B", "C" ];
for (var i = 0; i < vertices.length; i++) {
    g1.addVertex(vertices[i]);
}
console.log(g1);   // Graph { noOfVertices: 3, Adjlist: Map { "A" => [], "B" => [], "C" => [] } }

const g2=new M.Graph(4);
const vertices1 = [ 1,2,3,4];
for (var i = 0; i < vertices1.length; i++) {
    g2.addVertex(vertices1[i]);
}
console.log(g2);   //  // Graph { noOfVertices: 4, Adjlist: Map { 1 => [ 2 ], 2 => [ 3 ], 3 => [ 4 ], 4 => [ 1 ] } }`}
				</Highlight>

				<h3>Info</h3>
				<p>Implemented using JavaScript"s built-in <b>set</b> function.</p>

				<hr />

				<h3>Syntax</h3>
				<p><span>g.addEdge(source, destination)</span></p>

				<h3>Arguments</h3>
				<p><span>Number/String</span></p>

				<h3>Return</h3>
				<p><span>Number</span></p>

				<h3>Examples</h3>
				<Highlight language="javascript" >
					{
`const g=new M.Graph(3);
const vertices = [ "A", "B", "C" ];
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}
g.addEdge("A", "B");
g.addEdge("B", "C");
g.addEdge("C", "A");
console.log(g);   //  Graph { noOfVertices: 3, Adjlist: Map { "A" => [ "B" ], "B" => [ "C" ], "C" => [ "A" ] } }`}
				</Highlight>

				<h3>Info</h3>
				<p>Implemented using JavaScript"s built-in <b>get</b> and <b>push</b> functions.</p>

				<hr />

				<h3>Syntax</h3>
				<p><span>g.printGraph()</span></p>

				<h3>Arguments</h3>
				<p><span>None</span></p>

				<h3>Return</h3>
				<p><span>Object</span></p>

				<h3>Examples</h3>
				<Highlight language="javascript" >
					{
`const g=new M.Graph(3);
const vertices = [ "A", "B", "C" ];
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}
g.addEdge("A", "B");
g.addEdge("B", "C");
g.addEdge("C", "A");
console.log(g.printGraph());   //  Map { "A" => [ "B" ], "B" => [ "C" ], "C" => [ "A" ] }`}
				</Highlight>

				<hr />

				<h3>Syntax</h3>
				<p><span>g.removeVertex(vertex)</span></p>

				<h3>Arguments</h3>
				<p><span>Number/String</span></p>

				<h3>Return</h3>
				<p><span>Boolean</span></p>

				<h3>Examples</h3>
				<Highlight language="javascript" >
					{
`const g=new M.Graph(4);
const vertices = [ "A", "B", "C", "D" ];
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}
g.addEdge("A", "B");
g.addEdge("B", "C");
g.addEdge("C", "D");
console.log(g.printGraph());   //  Map { "A" => [ "B" ], "B" => [ "C" ], "C" => [ "D" ], "D" => [] }
console.log(g.removeVertex("A"));   //  true
g.removeVertex("B");
console.log(g.printGraph());   //  Map { "C" => [ "D" ], "D" => [] }


const g=new M.Graph(3);
console.log(g.removeVertex("A"));   // Empty Graph`}
				</Highlight>

				<h3>Info</h3>
				<p>Implemented using JavaScript"s built-in <b>delete</b> function.</p>

				<hr />

				<h3>Syntax</h3>
				<p><span>g.removeEdge(vertexName, edgeName)</span></p>

				<h3>Arguments</h3>
				<p><span>Number/String</span></p>

				<h3>Return</h3>
				<p><span>String</span></p>

				<h3>Examples</h3>
				<Highlight language="javascript" >
					{
`const g=new M.Graph(4);
const vertices = [ "A", "B", "C", "D" ];
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}
g.addEdge("A", "B");
g.addEdge("B", "C");
g.addEdge("C", "D");
g.addEdge("D", "A");
console.log(g.printGraph());   //  Map { "A" => [ "B" ], "B" => [ "C" ], "C" => [ "D" ], "D" => [ "A" ] }
console.log(g.removeEdge("A", "B"));   //  B
g.removeVertex("A");
console.log(g.printGraph());   //  Map { "B" => [ "C" ], "C" => [ "D" ], "D" => [ "A" ] }

console.log(g.removeEdge("E", "B"));   //  Vertex does not exist in the Graph
console.log(g.removeEdge("E", 1));   //  Vertex does not exist in the Graph
console.log(g.removeEdge("B", "D"));   //  Edge not found!
console.log(g.removeEdge("B", 9));   //  Edge not found!`}
				</Highlight>

				<h3>Info</h3>
				<p>Implemented using JavaScript"s built-in <b>get</b>, <b>indexOf</b>, <b>toString</b> and <b>splice</b> function.</p>

				<hr />

				<h3>Syntax</h3>
				<p><span>g.bfs(startNode)</span></p>

				<h3>Arguments</h3>
				<p><span>Number/String</span></p>

				<h3>Return</h3>
				<p><span>Object</span></p>

				<h3>Examples</h3>
				<Highlight language="javascript" >
					{
`const g=new M.Graph(4);
const vertices = [ "A", "B", "C", "D" ];
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}
g.addEdge("A", "B");
g.addEdge("B", "C");
g.addEdge("C", "D");
g.addEdge("D", "A");
console.log(g.printGraph());   //  Map { "A" => [ "B" ], "B" => [ "C" ], "C" => [ "D" ], "D" => [ "A" ] }
console.log(g.bfs("A"));   //  [ "A", "B", "C", "D" ]
console.log(g.bfs("B"));   //  [ "B", "C", "D", "A" ]
console.log(g.bfs("D"));   //  [ "D", "A", "B", "C" ]
console.log(g.bfs("E"));   //  Node doesn"t exist in the Graph`}
				</Highlight>

				<h3>Info</h3>
				<p>Implemented using JavaScript"s built-in <b>from</b>, <b>keys</b>, <b>includes</b>, <b>push</b>, and <b>shift</b> function.</p>

			</div>
    );
  }
}

