import React from 'react';
import custom from '../../custom/index';

class Face extends React.Component {
  render() {
    return (
      <div>
        <div className='background'>
          <h1>face :) hidden</h1>
        </div>
      </div>
      );
  }
}
;

const customize = custom['components/Face'] || ((x) => x);
const FaceWithCustom = customize(Face);

export default FaceWithCustom;
