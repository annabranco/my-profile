import React, { ReactElement, ReactNode } from 'react';
import { bool, node, string } from 'prop-types';
import { isDesktop } from '../../../../utils/device';
import { SectionContent, SectionHeader, Title } from './styles';
import { ScrollSectionElement } from '../styles';

interface Props {
  children: ReactNode | ReactNode[];
  last: boolean;
  title: string;
}

const ScrollSection = ({ children, last, title }: Props): ReactElement => (
  <ScrollSectionElement id={title} last={last}>
    {isDesktop && (
      <SectionHeader>
        <Title>{title}</Title>
      </SectionHeader>
    )}
    <SectionContent>{children}</SectionContent>
  </ScrollSectionElement>
);

ScrollSection.propTypes = {
  children: node.isRequired,
  last: bool,
  title: string.isRequired
};
ScrollSection.defaultProps = {
  last: false
};
export default ScrollSection;
