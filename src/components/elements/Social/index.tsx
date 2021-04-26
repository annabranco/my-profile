import React, { ReactElement } from 'react';
import { InfoPageTextType } from '../../../types/interfaces';
import { infoPageTextPropType } from '../../../types/propTypes';
import {
  Icon,
  Link,
  LinkButton,
  LinkSkypeButton,
  SocialArea,
  SocialItem,
  SocialItemSkype,
  Text
} from './styles';

const Social = ({ texts }: { texts: InfoPageTextType }): ReactElement => (
  <SocialArea>
    <SocialItem>
      <Link href="mailto:anya.branco@icloud.com">
        <Icon className="far fa-envelope" />
        <Text>anya.branco@icloud.com</Text>
      </Link>
    </SocialItem>
    <SocialItem>
      <LinkButton
        href="https://github.com/annabranco"
        target="_Blank"
        rel="noopener noreferrer"
      >
        <Icon className="fab fa-github-alt" />
        <Text>Github</Text>
      </LinkButton>
    </SocialItem>
    <SocialItem>
      <LinkButton
        href="https://www.linkedin.com/in/annabranco/"
        target="_Blank"
        rel="noopener noreferrer"
      >
        <Icon className="fab fa-linkedin-in" />
        <Text>LinkedIn</Text>
      </LinkButton>
    </SocialItem>
    <SocialItem>
      <LinkButton
        href="https://twitter.com/AnyaBranco"
        target="_Blank"
        rel="noopener noreferrer"
      >
        <Icon className="fab fa-twitter" />
        <Text>Twitter</Text>
      </LinkButton>
    </SocialItem>
    <SocialItemSkype>
      <LinkSkypeButton href="skype:live%3Aanna.branco_3?call">
        <Icon className="fab fa-skype" />
        <Text>{texts.call}</Text>
      </LinkSkypeButton>
      <LinkSkypeButton href="skype:live%3Aanna.branco_3?chat">
        {' '}
        <Icon className="fas fa-comments" />
        <Text>{texts.chat}</Text>
      </LinkSkypeButton>
    </SocialItemSkype>
  </SocialArea>
);

Social.propTypes = {
  texts: infoPageTextPropType.isRequired
};

export default Social;
