import React from 'react';
import { string, node } from 'prop-types';
import {
  SectionContainer,
  SectionHeaderContainer,
  SectionHeaderTitle
} from './styles';

const ScrollSection = ({ title, children }) => (
  <section id={title}>
    <SectionHeaderContainer>
      <SectionHeaderTitle>{title}</SectionHeaderTitle>
    </SectionHeaderContainer>
    <SectionContainer>{children}</SectionContainer>
  </section>
);

ScrollSection.propTypes = {
  title: string.isRequired,
  children: node.isRequired
};

export default ScrollSection;
