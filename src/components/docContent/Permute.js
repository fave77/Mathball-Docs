import React, { Component } from "react";
import Content from './Content';

const validCode=
`M.permute("abc")   // "abc","acb","bac","bca","cab","cba"
M.permute("123")   // "123","132","213","231","312","321"
M.permute("4")   // "4"
M.permute("a")   // "a"
M.permute("15")   // "15","51"
M.permute("ab")   // "ab","ba"`

const inValidCode=
`/*
* TypeError: Invalid argument received: <argument>
* 'permute()' only accept a string!
*/
M.permute(123);
M.permute(-20);
M.permute(0.254);
M.permute(["foo", "bar"]);`


export default class Permute extends Component {
  render() {
    return (
			<div className="tab-pane fade" id="permute" role="tabpanel" aria-labelledby="permute-tab">

				<Content
					title={'Permute'}
					description={`The <b>M.permute()</b> function returns all permutations of the given string.`}
					syntax={['M.permute("value")']}
					arguments={['String']}
					return={['Array']}
					validCode={validCode}
					inValidCode={inValidCode}
					info={`Implemented using JavaScript's built-in <b>split</b>,<b>shift</b>,<b>splice</b>,<b>push</b>,<b>map</b>,<b>filter</b>,<b>sort</b>,<b>join</b>,<b>indexOf</b> functions.`}
				/>

			</div>
    );
  }
}

