import React from 'react';
import { node, string } from 'prop-types';
import { SectionContent, SectionHeader, Title } from './styles';
import { isDesktop } from '../../../../utils/device';

const ScrollSection = ({ children, title }) => (
  <section id={title}>
    {isDesktop && (
      <SectionHeader>
        <Title>{title}</Title>
      </SectionHeader>
    )}
    <SectionContent>{children}</SectionContent>
  </section>
);

ScrollSection.propTypes = {
  children: node.isRequired,
  title: string.isRequired
};

export default ScrollSection;
