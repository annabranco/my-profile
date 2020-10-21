import React from 'react';
import { string, node } from 'prop-types';
import { SectionContent, SectionHeader, Title } from './styles';

const ScrollSection = ({ title, children }) => (
  <section id={title}>
    <SectionHeader>
      <Title>{title}</Title>
    </SectionHeader>
    <SectionContent>{children}</SectionContent>
  </section>
);

ScrollSection.propTypes = {
  title: string.isRequired,
  children: node.isRequired
};

export default ScrollSection;
