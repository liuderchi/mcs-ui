// @flow
import * as React from 'react';
import * as R from 'ramda';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox';
import { StyledLabel } from './styled-components';

export type Props = {
  value: boolean,
  onChange: (value: boolean) => Promise<void> | void,
  children?: React.Node,
};

class InputCheckbox extends React.PureComponent<Props> {
  static propTypes = {
    value: PropTypes.bool, // (value: boolean) => Promise<void> | void,
    onChange: PropTypes.func,
    children: PropTypes.node,
  };

  onChange = () => {
    const { onChange, value } = this.props;
    onChange(!value);
  };

  render() {
    const { value, children, ...otherProps } = this.props;
    const { onChange } = this;

    return (
      <StyledLabel onClick={onChange}>
        <Checkbox value={value} {...R.omit(['onChange'])(otherProps)} />
        {children}
      </StyledLabel>
    );
  }
}

export default InputCheckbox;
