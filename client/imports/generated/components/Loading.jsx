import React from 'react';
import custom from '../../custom/index';

class Loading extends React.Component {
  render() {
    return (
      <div>
        <div className='background'>
          <h1>loading...</h1>
        </div>
      </div>
      );
  }
}
;

const customize = custom['components/Loading'] || ((x) => x);
const LoadingWithCustom = customize(Loading);

export default LoadingWithCustom;
