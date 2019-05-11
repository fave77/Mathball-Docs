import React, { Component } from "react";
import Content from './Content';

const validCode=
`M.nCr(4,2);          // 6
M.nCr(5,2);         // 10
M.nCr(3,1);         // 3`

const inValidCode=
`/*
* TypeError: Invalid argument received: <argument>
* 'nCr(n,k)' only accept positive real numbers where n >= r must hold true.
*/
M.nCr(3,5);
M.nCr(-2,5);
M.nCr(2.02,3);`


export default class BinomialCoeff extends Component {
  render() {
    return (
			<div className="tab-pane fade" id="binomial-coeff" role="tabpanel" aria-labelledby="binomial-coeff-tab">

				<Content
					title={'Binomial Coefficient'}
					description={`The <b>M.nCr(n,r)</b> function return the coefficiant of x<sup>r</sup> in the expansion of (1+x)<sup>n</sup>.`}
					syntax={['M.nCr(value of n,value of r)']}
					arguments={['Number']}
					return={['Number']}
					validCode={validCode}
					inValidCode={inValidCode}
					info={`Implemented using JavaScript's <b>if()</b> condition and <b>for()</b> loop.`}
				/>

			</div>
    );
  }
}

