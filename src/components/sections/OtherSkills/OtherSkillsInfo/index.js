import React from 'react';
import { useSelector } from 'react-redux';
import { bool, func } from 'prop-types';
import {
  globalTextsSelector,
  otherSkillsTextSelector
} from '../../../../redux/selectors';
import {
  CloseButton,
  DesignArea,
  DesignText,
  Flag,
  Icon,
  LanguagesArea,
  LanguagesTable,
  OtherInformationAreaArea,
  OtherInformationAreaTable,
  OtherSkillsWrapper,
  Sample,
  SamplesWrapper,
  Title
} from './styles';
import { getFlagURL } from '../../../../utils/icons';
import { isDesktop } from '../../../../utils/device';

const OtherSkillsInfo = ({ onClickOpen, onClickClose, visible }) => {
  const texts = useSelector(otherSkillsTextSelector);
  const globalTexts = useSelector(globalTextsSelector);

  return (
    <OtherSkillsWrapper
      aria-label={globalTexts.open}
      onClick={() => onClickOpen('otherSkillsSection')}
      role="button"
      tabIndex={0}
      visible={visible}
    >
      <LanguagesArea>
        <Title>{texts.languages}</Title>
        <LanguagesTable>
          <tbody>
            {texts.languagesSpoken.map(item => (
              <tr key={item.language}>
                <td>
                  {item.language}
                  <Flag
                    src={getFlagURL({
                      country: item.flagCode,
                      style: 'round3d',
                      size: 'small'
                    })}
                    alt=""
                  />
                </td>
                <td>
                  <Icon className="fas fa-comments" title="Speaking" />
                  {item.speak}
                </td>
                <td>
                  <Icon className="fas fa-book-open" title="Reading" />
                  {item.read}
                </td>
                <td>
                  <Icon className="fas fa-pen" title="Writing" />
                  {item.write}
                </td>
              </tr>
            ))}
          </tbody>
        </LanguagesTable>
      </LanguagesArea>

      <OtherInformationAreaArea>
        <Title>{texts.other}</Title>
        <OtherInformationAreaTable>
          {isDesktop && (
            <thead>
              <tr>
                <th>{texts.skill}</th>
                <th>{texts.how}</th>
              </tr>
            </thead>
          )}
          <tbody>
            {texts.skills.map(item => (
              <tr key={item.skill}>
                <td>{item.skill}</td>
                <td>{item.details}</td>
              </tr>
            ))}
          </tbody>
        </OtherInformationAreaTable>
      </OtherInformationAreaArea>
      {isDesktop && (
        <>
          <DesignArea>
            <Title>{texts.design}</Title>
            <DesignText>{texts.samples}</DesignText>
            <SamplesWrapper>
              <a
                href="https://pre00.deviantart.net/f5fe/th/pre/f/2018/065/a/2/rio_de_janeiro__um_retrato_da_violencia_by_annabranco-dc53j1i.jpg"
                rel="noopener noreferrer"
                target="_Blank"
              >
                <Sample image="https://pre00.deviantart.net/f5fe/th/pre/f/2018/065/a/2/rio_de_janeiro__um_retrato_da_violencia_by_annabranco-dc53j1i.jpg" />
              </a>
              <a
                href="https://img00.deviantart.net/9fb7/i/2018/069/2/c/recuerda_siempre_mirar_el_color_de_las_banderas_by_annabranco-dc5gv8e.jpg"
                rel="noopener noreferrer"
                target="_Blank"
              >
                <Sample image="https://img00.deviantart.net/9fb7/i/2018/069/2/c/recuerda_siempre_mirar_el_color_de_las_banderas_by_annabranco-dc5gv8e.jpg" />
              </a>
              <a
                href="https://pre00.deviantart.net/3afa/th/pre/i/2018/069/e/3/basic_english_by_annabranco-dc5go6q.jpg"
                rel="noopener noreferrer"
                target="_Blank"
              >
                <Sample image="https://pre00.deviantart.net/3afa/th/pre/i/2018/069/e/3/basic_english_by_annabranco-dc5go6q.jpg" />
              </a>
              <a
                href="https://pre00.deviantart.net/6e8f/th/pre/f/2018/245/e/8/violencia1_en_by_annabranco-dclta8q.jpg"
                rel="noopener noreferrer"
                target="_Blank"
              >
                <Sample image="https://pre00.deviantart.net/6e8f/th/pre/f/2018/245/e/8/violencia1_en_by_annabranco-dclta8q.jpg" />
              </a>
              <a
                href="https://pre00.deviantart.net/9f40/th/pre/f/2018/065/1/7/terremoto_en_mexico_19_09_17_by_alvarobranco_dbo6p_by_annabranco-dc53k8f.jpg"
                rel="noopener noreferrer"
                target="_Blank"
              >
                <Sample image="https://pre00.deviantart.net/9f40/th/pre/f/2018/065/1/7/terremoto_en_mexico_19_09_17_by_alvarobranco_dbo6p_by_annabranco-dc53k8f.jpg" />
              </a>
              <a
                href="https://pre00.deviantart.net/d51e/th/pre/i/2018/069/5/b/european_map__arabic__by_annabranco-dc5gve5.jpg"
                rel="noopener noreferrer"
                target="_Blank"
              >
                <Sample image="https://pre00.deviantart.net/d51e/th/pre/i/2018/069/5/b/european_map__arabic__by_annabranco-dc5gve5.jpg" />
              </a>
            </SamplesWrapper>
          </DesignArea>
          <CloseButton
            aria-label={globalTexts.close}
            hidden={!visible}
            onClick={() => onClickClose('otherSkillsSection')}
            type="button"
          >
            {globalTexts.close}
          </CloseButton>
        </>
      )}
    </OtherSkillsWrapper>
  );
};

OtherSkillsInfo.propTypes = {
  onClickOpen: func,
  onClickClose: func,
  visible: bool.isRequired
};

OtherSkillsInfo.defaultProps = {
  onClickOpen: () => null,
  onClickClose: () => null
};

export default OtherSkillsInfo;
