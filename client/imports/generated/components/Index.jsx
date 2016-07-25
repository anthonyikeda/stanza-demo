import React from 'react';
import custom from '../../custom/index';

class Index extends React.Component {
  render() {
    return (
      <div>
        <div className='background'>
          <h1>Trent's Index</h1>
        </div>
      </div>
      );
  }
}
;

const customize = custom['components/Index'] || ((x) => x);
const IndexWithCustom = customize(Index);

export default IndexWithCustom;
