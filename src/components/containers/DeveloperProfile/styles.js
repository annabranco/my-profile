import styled from 'styled-components';
import { rgba } from 'polished';
import Sea from '../../../images/bg/sea.gif';

export const SectionDeveloper = styled.section`
  position: relative;
  background-image: linear-gradient(
      ${rgba('#ffffff', 0.92)},
      ${rgba('#f0f1fc', 0.93)},
      ${rgba('#e6effb', 0.98)}
    ),
    url(${Sea});
  background-position: center;
  height: auto;
  overflow: hidden;
  padding-top: 50px;
`;

export const DeveloperInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
`;
