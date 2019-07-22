// @flow strict
import * as React from 'react';
import PropTypes from 'prop-types';

import FieldType from 'views/logic/fieldtypes/FieldType';

import CustomPropTypes from './CustomPropTypes';
import FieldActions from './actions/FieldActions';

type Props = {|
  children?: React.Node,
  disabled?: boolean,
  name: string,
  menuContainer: ?HTMLElement,
  queryId: string,
  type: FieldType,
|}

const Field = ({ children, disabled = false, menuContainer, name, queryId, type }: Props) => (
  <FieldActions element={children || name}
                disabled={disabled}
                menuContainer={menuContainer}
                name={name}
                type={type}
                queryId={queryId}>
    {name} = {type.type}
  </FieldActions>
);

Field.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  menuContainer: PropTypes.object,
  queryId: PropTypes.string.isRequired,
  type: CustomPropTypes.FieldType.isRequired,
};

Field.defaultProps = {
  children: null,
  disabled: false,
  menuContainer: document.body,
};

export default Field;