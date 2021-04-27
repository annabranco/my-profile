import React, { ReactElement, ReactNode } from 'react';
import { node, string } from 'prop-types';
import { isDesktop } from '../../../../utils/device';
import { SectionContent, SectionHeader, Title } from './styles';

interface Props {
  children: ReactNode | ReactNode[];
  title: string;
}

const ScrollSection = ({ children, title }: Props): ReactElement => (
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
