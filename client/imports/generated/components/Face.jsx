import React from 'react';
import { connect as reduxConnect } from 'react-redux';
import custom from '../../custom/index';

class Face extends React.Component {
  render() {
    return (
      <div>
        <div className='background'>
          <h1>face :) hidden</h1>
          <h2>{this.props['state.face.name']}</h2>
        </div>
      </div>
      );
  }
}
;

const FaceWithRedux = reduxConnect(
  (state) => ({
    'state.face.name': state.face.name
  }),
  {}
)(Face);

const customize = custom['components/Face'] || ((x) => x);
const FaceWithReduxWithCustom = customize(FaceWithRedux);

export default FaceWithReduxWithCustom;
