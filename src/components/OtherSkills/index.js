import React from 'react';
import { useSelector } from 'react-redux';
import { func } from 'prop-types';
import {
  globalTextsSelector,
  otherSkillsTextSelector
} from '../../redux/selectors';
import { isDesktop } from '../../utils/device';
import { MacNotebook } from '../../assets/images';
import { TextFindSomething } from '../Seabed/styles';
import {
  CloseButton,
  DesignArea,
  DesignText,
  Flag,
  Icon,
  KeyboardKeysWrapper,
  Keys,
  LanguagesArea,
  LanguagesTable,
  MacKeyboard,
  MacScreen,
  OtherInformationsArea,
  OtherInformationsTable,
  OtherSkillsWrapper,
  Sample,
  SamplesWrapper,
  SectionOtherSkills,
  Title,
  TopBar
} from './styles';
import { seabedElementsPropType } from '../../types';

const OtherSkills = ({
  onClickClose,
  onClickOpen,
  status: { read, visible }
}) => {
  const texts = useSelector(otherSkillsTextSelector);
  const globalTexts = useSelector(globalTextsSelector);

  return (
    <>
      {!read && isDesktop ? (
        <>
          <TextFindSomething>{texts.find}</TextFindSomething>
          <TextFindSomething>{texts.find2}</TextFindSomething>
          <TextFindSomething>{texts.investigate}</TextFindSomething>
        </>
      ) : null}

      <SectionOtherSkills id="Other Skills Section" visible={visible}>
        {isDesktop && <TopBar visible={visible} src={MacNotebook} alt="" />}
        <MacScreen visible={visible}>
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
                  <tr>
                    <td>
                      {texts.english}
                      <Flag
                        src="https://www.countryflags.io/us/flat/16.png"
                        alt=""
                      />
                    </td>
                    <td>
                      <Icon className="fas fa-comments" title="Speaking" />
                      {texts.fluent}
                    </td>
                    <td>
                      <Icon className="fas fa-book-open" title="Reading" />
                      {texts.fluent}
                    </td>
                    <td>
                      <Icon className="fas fa-pen" title="Writing" />
                      {texts.fluent}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {texts.spanish}
                      <Flag
                        src="https://www.countryflags.io/es/flat/16.png"
                        alt=""
                      />
                    </td>
                    <td>
                      <Icon className="fas fa-comments" title="Speaking" />
                      {texts.fluent}
                    </td>
                    <td>
                      <Icon className="fas fa-book-open" title="Reading" />
                      {texts.fluent}
                    </td>
                    <td>
                      <Icon className="fas fa-pen" title="Writing" />
                      {texts.fluent}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {texts.portuguese}
                      <Flag
                        src="https://www.countryflags.io/br/flat/16.png"
                        alt=""
                      />
                    </td>
                    <td>
                      <Icon className="fas fa-comments" title="Speaking" />
                      {texts.fluent}
                    </td>
                    <td>
                      <Icon className="fas fa-book-open" title="Reading" />
                      {texts.fluent}
                    </td>
                    <td>
                      <Icon className="fas fa-pen" title="Writing" />
                      {texts.fluent}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {texts.french}
                      <Flag
                        src="https://www.countryflags.io/fr/flat/16.png"
                        alt=""
                      />
                    </td>
                    <td>
                      <Icon className="fas fa-comments" title="Speaking" />
                      {texts.intermediate}
                    </td>
                    <td>
                      <Icon className="fas fa-book-open" title="Reading" />
                      {texts.intermediate}
                    </td>
                    <td>
                      <Icon className="fas fa-pen" title="Writing" />
                      {texts.basic}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {texts.russian}
                      <Flag
                        src="https://www.countryflags.io/ru/flat/16.png"
                        alt=""
                      />
                    </td>
                    <td>
                      <Icon className="fas fa-comments" title="Speaking" />
                      {texts.basic}
                    </td>
                    <td>
                      <Icon className="fas fa-book-open" title="Reading" />
                      {texts.basic}
                    </td>
                    <td>
                      <Icon className="fas fa-pen" title="Writing" />
                      {texts.basic}
                    </td>
                  </tr>
                </tbody>
              </LanguagesTable>
            </LanguagesArea>

            <OtherInformationsArea>
              <Title>{texts.other}</Title>
              <OtherInformationsTable>
                <thead>
                  <tr>
                    <th>{texts.skill}</th>
                    <th>{texts.how}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{texts.skill1}</td>
                    <td>{texts.skill1details}</td>
                  </tr>
                  <tr>
                    <td>{texts.skill2}</td>
                    <td>{texts.skill2details}</td>
                  </tr>
                  <tr>
                    <td>{texts.skill3}</td>
                    <td>{texts.skill3details}</td>
                  </tr>
                  <tr>
                    <td>{texts.skill4}</td>
                    <td>{texts.skill4details}</td>
                  </tr>
                  <tr>
                    <td>{texts.skill5}</td>
                    <td>{texts.skill5details}</td>
                  </tr>
                </tbody>
              </OtherInformationsTable>
            </OtherInformationsArea>
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
          </OtherSkillsWrapper>
        </MacScreen>
        <MacKeyboard hidden={visible} />
        <KeyboardKeysWrapper hidden={visible}>
          <Keys> . . . . . . . ...</Keys>
          <Keys>... . . . . . . ..</Keys>
          <Keys>. . . . . . . . . .</Keys>
          <Keys>. . . . . . . . . .</Keys>
          <Keys>------......</Keys>
        </KeyboardKeysWrapper>
      </SectionOtherSkills>
    </>
  );
};

OtherSkills.propTypes = {
  onClickClose: func.isRequired,
  onClickOpen: func.isRequired,
  status: seabedElementsPropType.isRequired
};

export default OtherSkills;
