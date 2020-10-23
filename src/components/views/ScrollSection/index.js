import React from 'react';
import { node, string } from 'prop-types';
import { SectionContent, SectionHeader, Title } from './styles';

const ScrollSection = ({ children, title }) => (
  <section id={title}>
    <SectionHeader>
      <Title>{title}</Title>
    </SectionHeader>
    <SectionContent>{children}</SectionContent>
  </section>
);

ScrollSection.propTypes = {
  children: node.isRequired,
  title: string.isRequired
};

export default ScrollSection;
