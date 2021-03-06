// @flow
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { type ComponentType } from '../utils/type.flow';

export type Props = { active?: boolean };
type InnerProps = { active: boolean };

const Rotate: ComponentType<Props> = styled.div`
  line-height: 0;

  > * {
    transform-origin: center;
    transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    transform: ${({ active }: InnerProps) =>
      active ? 'rotate(-180deg)' : 'initial'};
  }
`;

Rotate.displayName = 'Rotate';
Rotate.propTypes = {
  active: PropTypes.bool,
};
Rotate.defaultProps = {
  active: false,
};

export default Rotate;
