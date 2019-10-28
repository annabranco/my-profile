import React from 'react';
import { infoPageTextPropType } from '../../../types';

const Social = ({ texts }) => (
  <div className="infoPage__social">
    <div className="infoPage__social--inner">
      <a
        className="infoPage__social--link-mail"
        href="mailto:anya.branco@icloud.com"
      >
        <i className="far fa-envelope icon-mail" />
        <p className="infoPage__social-text">anya.branco@icloud.com</p>
      </a>
    </div>
    <div className="infoPage__social--inner">
      <a
        className="infoPage__social--link"
        href="https://github.com/annabranco"
        target="_Blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github-alt icon-github" />
        <p className="infoPage__social-text">Github</p>
      </a>
    </div>
    <div className="infoPage__social--inner">
      <a
        className="infoPage__social--link"
        href="https://www.linkedin.com/in/annabranco/"
        target="_Blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin-in icon-linkedin" />
        <p className="infoPage__social-text">LinkedIn</p>
      </a>
    </div>
    <div className="infoPage__social--inner">
      <a
        className="infoPage__social--link"
        href="https://twitter.com/AnyaBranco"
        target="_Blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-twitter icon-twitter" />
        <p className="infoPage__social-text">Twitter</p>
      </a>
    </div>
    <div className="infoPage__social--inner infoPage__social--link">
      <a
        className="infoPage__social--link infoPage__social--link-skype"
        href="skype:live%3Aanna.branco_3?call"
      >
        <i className="fab fa-skype icon-call" />
        <p className="infoPage__social-text">{texts.call}</p>
      </a>
      <a
        className="infoPage__social--link infoPage__social--link-skype"
        href="skype:live%3Aanna.branco_3?chat"
      >
        <i className="fas fa-comments icon-chat" />
        <p className="infoPage__social-text">{texts.chat}</p>
      </a>
    </div>
  </div>
);

Social.propTypes = {
  texts: infoPageTextPropType.isRequired
};

export default Social;
