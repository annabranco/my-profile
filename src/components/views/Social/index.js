import React from 'react';
import { infoPageTextPropType } from '../../../types';
import {
  SocialWrapper,
  SocialBlock,
  SocialLink,
  SocialLinkButton,
  SocialIcon,
  SocialName,
  SocialBlockSkype,
  SocialLinkSkypeButton
} from './styles';

const Social = ({ texts }) => (
  <SocialWrapper>
    <SocialBlock>
      <SocialLink href="mailto:anya.branco@icloud.com">
        <SocialIcon className="far fa-envelope" />
        <SocialName>anya.branco@icloud.com</SocialName>
      </SocialLink>
    </SocialBlock>
    <SocialBlock>
      <SocialLinkButton
        href="https://github.com/annabranco"
        target="_Blank"
        rel="noopener noreferrer"
      >
        <SocialIcon className="fab fa-github-alt" />
        <SocialName>Github</SocialName>
      </SocialLinkButton>
    </SocialBlock>
    <SocialBlock>
      <SocialLinkButton
        href="https://www.linkedin.com/in/annabranco/"
        target="_Blank"
        rel="noopener noreferrer"
      >
        <SocialIcon className="fab fa-linkedin-in" />
        <SocialName>LinkedIn</SocialName>
      </SocialLinkButton>
    </SocialBlock>
    <SocialBlock>
      <SocialLinkButton
        href="https://twitter.com/AnyaBranco"
        target="_Blank"
        rel="noopener noreferrer"
      >
        <SocialIcon className="fab fa-twitter" />
        <SocialName>Twitter</SocialName>
      </SocialLinkButton>
    </SocialBlock>
    <SocialBlockSkype>
      <SocialLinkSkypeButton href="skype:live%3Aanna.branco_3?call">
        <SocialIcon className="fab fa-skype" />
        <SocialName>{texts.call}</SocialName>
      </SocialLinkSkypeButton>
      <SocialLinkSkypeButton href="skype:live%3Aanna.branco_3?chat">
        {' '}
        <SocialIcon className="fas fa-comments" />
        <SocialName>{texts.chat}</SocialName>
      </SocialLinkSkypeButton>
    </SocialBlockSkype>
  </SocialWrapper>
);

Social.propTypes = {
  texts: infoPageTextPropType.isRequired
};

export default Social;
