import React from 'react';
import { connect } from 'react-redux';
import { getContext } from 'recompose';

import { selectors } from '../../ducks';
import CellSelected from './presenter';
import { selectHelper } from '../../helper';

const mapStateToProps = (state, { stateKey, id, preselected = [], unselectables = [] }) => {
  const isSelected = selectors.getIsSelected(state, stateKey, id);

  return {
    state: selectHelper.getSelectState(id, isSelected, preselected, unselectables),
  };
}

const contextTypes = {
  stateKey: React.PropTypes.string.isRequired,
  preselected: React.PropTypes.array,
  unselectables: React.PropTypes.array,
};

export default getContext(contextTypes)(connect(mapStateToProps)(CellSelected));