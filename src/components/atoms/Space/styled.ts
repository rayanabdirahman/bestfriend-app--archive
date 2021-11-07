import styled from 'styled-components/native';
import { Props } from './index';

const MapFlexItems: { [key: string]: string } = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end'
};

export const space = styled.View<Props>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === 'horizontal' ? 'row' : 'column'};
  align-items: ${({ align }) => (align ? MapFlexItems[align] : 'flex-start')};
  justify-content: ${({ align }) =>
    align ? MapFlexItems[align] : 'flex-start'};
  width: 100%;
  margin-bottom: 36px;
`;
