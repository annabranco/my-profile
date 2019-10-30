import React from 'react';
import { PropTypes } from 'prop-types';
import { SHOW_ACTION, HIDE_ACTION } from '../../../constants/actions';
import { MacNotebook } from '../../../images';
import {
  seabedElementsPropType,
  otherSkillsTextPropType,
  globalTextsPropType
} from '../../../types';
import { isDesktop } from '../../../utils/device';

const OtherSkills = ({
  texts,
  globalTexts,
  status: { read, visible },
  onClickOpen,
  onClickClose
}) => (
  <>
    {!read && isDesktop ? (
      <>
        <p className="seabed__findSomething">{texts.find}</p>
        <p className="seabed__findSomething">{texts.find2}</p>
        <p className="seabed__findSomething">{texts.investigate}</p>
      </>
    ) : null}

    <section className={`otherSkills__mac ${visible && SHOW_ACTION}`}>
      <div className={`otherSkills__mac--screen ${visible && SHOW_ACTION}`}>
        <div
          className={`section__otherSkills ${visible && SHOW_ACTION}`}
          onClick={() => onClickOpen('otherSkills')}
          role="button"
          aria-label={globalTexts.open}
          tabIndex={0}
        >
          {isDesktop && (
            <img src={MacNotebook} alt="" className="skills--topBar" />
          )}
          <button
            className="seabed__click2close seabed__click2close-otherSkills"
            onClick={() => onClickClose('otherSkills')}
            type="button"
            aria-label={globalTexts.close}
          >
            X
          </button>

          <div className="otherSkills__outer otherSkills__outer--languages">
            <h2 className="skills__table--title">{texts.languages}</h2>
            <table className="skills__table skills__table--languages">
              <tbody>
                <tr>
                  <td>
                    {texts.english}
                    <img
                      src="https://www.countryflags.io/us/flat/16.png"
                      alt=""
                      className="languages--flag"
                    />
                  </td>
                  <td>
                    <i
                      className="fas fa-comments icon--languages"
                      title="Speaking"
                    />
                    {texts.fluent}
                  </td>
                  <td>
                    <i
                      className="fas fa-book-open icon--languages"
                      title="Reading"
                    />
                    {texts.fluent}
                  </td>
                  <td>
                    <i className="fas fa-pen icon--languages" title="Writing" />
                    {texts.fluent}
                  </td>
                </tr>
                <tr>
                  <td>
                    {texts.spanish}
                    <img
                      src="https://www.countryflags.io/es/flat/16.png"
                      alt=""
                      className="languages--flag"
                    />
                  </td>
                  <td>
                    <i
                      className="fas fa-comments icon--languages"
                      title="Speaking"
                    />
                    {texts.fluent}
                  </td>
                  <td>
                    <i
                      className="fas fa-book-open icon--languages"
                      title="Reading"
                    />
                    {texts.fluent}
                  </td>
                  <td>
                    <i className="fas fa-pen icon--languages" title="Writing" />
                    {texts.fluent}
                  </td>
                </tr>
                <tr>
                  <td>
                    {texts.portuguese}
                    <img
                      src="https://www.countryflags.io/br/flat/16.png"
                      alt=""
                      className="languages--flag"
                    />
                  </td>
                  <td>
                    <i
                      className="fas fa-comments icon--languages"
                      title="Speaking"
                    />
                    {texts.fluent}
                  </td>
                  <td>
                    <i
                      className="fas fa-book-open icon--languages"
                      title="Reading"
                    />
                    {texts.fluent}
                  </td>
                  <td>
                    <i className="fas fa-pen icon--languages" title="Writing" />
                    {texts.fluent}
                  </td>
                </tr>
                <tr>
                  <td>
                    {texts.french}
                    <img
                      src="https://www.countryflags.io/fr/flat/16.png"
                      alt=""
                      className="languages--flag"
                    />
                  </td>
                  <td>
                    <i
                      className="fas fa-comments icon--languages"
                      title="Speaking"
                    />
                    {texts.intermediate}
                  </td>
                  <td>
                    <i
                      className="fas fa-book-open icon--languages"
                      title="Reading"
                    />
                    {texts.intermediate}
                  </td>
                  <td>
                    <i className="fas fa-pen icon--languages" title="Writing" />
                    {texts.basic}
                  </td>
                </tr>
                <tr>
                  <td>
                    {texts.russian}
                    <img
                      src="https://www.countryflags.io/ru/flat/16.png"
                      alt=""
                      className="languages--flag"
                    />
                  </td>
                  <td>
                    <i
                      className="fas fa-comments icon--languages"
                      title="Speaking"
                    />
                    {texts.basic}
                  </td>
                  <td>
                    <i
                      className="fas fa-book-open icon--languages"
                      title="Reading"
                    />
                    {texts.basic}
                  </td>
                  <td>
                    <i className="fas fa-pen icon--languages" title="Writing" />
                    {texts.basic}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="otherSkills__outer otherSkills__outer--other">
            <h2 className="skills__table--title">{texts.other}</h2>
            <table className="skills__table skills__table--other">
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
            </table>
          </div>
          <div className="otherSkills__outer otherSkills__outer--design">
            <h2 className="skills__table--title">{texts.design}</h2>
            <p className="skills__design">{texts.samples}</p>
            <div className="skills__design--samples">
              <a
                href="https://pre00.deviantart.net/f5fe/th/pre/f/2018/065/a/2/rio_de_janeiro__um_retrato_da_violencia_by_annabranco-dc53j1i.jpg"
                target="_Blank"
                rel="noopener noreferrer"
              >
                <div className="design__sample sample01" />
              </a>
              <a
                href="https://img00.deviantart.net/9fb7/i/2018/069/2/c/recuerda_siempre_mirar_el_color_de_las_banderas_by_annabranco-dc5gv8e.jpg"
                target="_Blank"
                rel="noopener noreferrer"
              >
                <div className="design__sample sample02" />
              </a>
              <a
                href="https://pre00.deviantart.net/3afa/th/pre/i/2018/069/e/3/basic_english_by_annabranco-dc5go6q.jpg"
                target="_Blank"
                rel="noopener noreferrer"
              >
                <div className="design__sample sample03" />
              </a>
              <a
                href="https://pre00.deviantart.net/6e8f/th/pre/f/2018/245/e/8/violencia1_en_by_annabranco-dclta8q.jpg"
                target="_Blank"
                rel="noopener noreferrer"
              >
                <div className="design__sample sample04" />
              </a>
              <a
                href="https://pre00.deviantart.net/9f40/th/pre/f/2018/065/1/7/terremoto_en_mexico_19_09_17_by_alvarobranco_dbo6p_by_annabranco-dc53k8f.jpg"
                target="_Blank"
                rel="noopener noreferrer"
              >
                <div className="design__sample sample05" />
              </a>
              <a
                href="https://pre00.deviantart.net/d51e/th/pre/i/2018/069/5/b/european_map__arabic__by_annabranco-dc5gve5.jpg"
                target="_Blank"
                rel="noopener noreferrer"
              >
                <div className="design__sample sample06" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={`otherSkills__mac--keyboard ${visible && HIDE_ACTION}`} />
      <div
        className={`otherSkills__mac--keyboard-keyArea ${visible &&
          HIDE_ACTION}`}
      >
        <p className="otherSkills__mac--keyboard-keys"> . . . . . . . ...</p>
        <p className="otherSkills__mac--keyboard-keys">... . . . . . . ..</p>
        <p className="otherSkills__mac--keyboard-keys">. . . . . . . . . .</p>
        <p className="otherSkills__mac--keyboard-keys">. . . . . . . . . .</p>
        <p className="otherSkills__mac--keyboard-keys">--------- ......</p>
      </div>
    </section>
  </>
);

OtherSkills.propTypes = {
  texts: otherSkillsTextPropType.isRequired,
  globalTexts: globalTextsPropType.isRequired,
  status: seabedElementsPropType.isRequired,
  onClickOpen: PropTypes.func.isRequired,
  onClickClose: PropTypes.func.isRequired
};

export default OtherSkills;
