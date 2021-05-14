import { ReactElement, ReactNode } from 'react';
import { bool, node, string } from 'prop-types';
import { isDesktop } from '../../../../utils/device';
import { SectionContent, SectionHeader, Title } from './styles';
import { ScrollSectionElement } from '../styles';

interface Props {
  children: ReactNode | ReactNode[];
  datae2eid?: string;
  last: boolean;
  title: string;
}

const ScrollSection = ({
  children,
  datae2eid,
  last,
  title
}: Props): ReactElement => (
  <ScrollSectionElement id={title} last={last}>
    {isDesktop && (
      <SectionHeader>
        <Title data-e2e-id={datae2eid}>{title}</Title>
      </SectionHeader>
    )}
    <SectionContent>{children}</SectionContent>
  </ScrollSectionElement>
);

ScrollSection.propTypes = {
  children: node.isRequired,
  datae2eid: string,
  last: bool,
  title: string.isRequired
};
ScrollSection.defaultProps = {
  datae2eid: null,
  last: false
};
export default ScrollSection;
