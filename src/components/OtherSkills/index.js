import React, { Component } from 'react';
import { MacNotebook } from '../../images';

export class OtherSkills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opened: false,
      read: false,
      sampleURL: undefined
    };
  }

  open = () => {
    if (!this.state.opened) {
      this.setState({
        opened: true,
        read: true
      });

      if (!window.matchMedia('(min-width: 768px)').matches) {
        document.querySelector('.section__experiences').classList.add('hidden');
      }

      document.querySelector('.section__otherSkills').classList.add('opened');
      document.querySelector('.otherSkills__mac').classList.add('opened');
      document
        .querySelector('.otherSkills__mac--screen')
        .classList.add('opened');
      document
        .querySelector('.otherSkills__mac--keyboard')
        .classList.add('hidden');
      document
        .querySelector('.otherSkills__mac--keyboard-keyArea')
        .classList.add('hidden');
    }
  };

  close = () => {
    this.setState({ opened: false });

    if (!window.matchMedia('(min-width: 768px)').matches) {
      document
        .querySelector('.section__experiences')
        .classList.remove('hidden');
    }
    document.querySelector('.section__otherSkills').classList.remove('opened');
    document.querySelector('.otherSkills__mac').classList.remove('opened');
    document
      .querySelector('.otherSkills__mac--screen')
      .classList.remove('opened');
    document
      .querySelector('.otherSkills__mac--keyboard')
      .classList.remove('hidden');
    document
      .querySelector('.otherSkills__mac--keyboard-keyArea')
      .classList.remove('hidden');
    this.props.markAsRead();
  };

  showSample = url => {
    if (!url) {
      this.setState({ sampleURL: undefined });
    } else {
      this.setState({ sampleURL: url });
    }
  };

  render() {
    const { read } = this.state;
    const { texts, viewedOtherSkills } = this.props;

    return (
      <React.Fragment>
        {!viewedOtherSkills &&
        !read &&
        window.matchMedia('(min-width: 768px)').matches ? (
          <React.Fragment>
            <p className="seabed__findSomething">{texts.find}</p>
            <p className="seabed__findSomething">{texts.find2}</p>
            <p className="seabed__findSomething">{texts.investigate}</p>
          </React.Fragment>
        ) : null}

        <div className="otherSkills__mac">
          <div className="otherSkills__mac--screen">
            <section className="section__otherSkills" onClick={this.open}>
              <img src={MacNotebook} alt="" className="skills--topBar" />
              <button
                className="seabed__click2close seabed__click2close-otherSkills"
                onClick={this.close}
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
                        ></i>
                        {texts.fluent}
                      </td>
                      <td>
                        <i
                          className="fas fa-book-open icon--languages"
                          title="Reading"
                        ></i>
                        {texts.fluent}
                      </td>
                      <td>
                        <i
                          className="fas fa-pen icon--languages"
                          title="Writing"
                        ></i>
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
                        ></i>
                        {texts.fluent}
                      </td>
                      <td>
                        <i
                          className="fas fa-book-open icon--languages"
                          title="Reading"
                        ></i>
                        {texts.fluent}
                      </td>
                      <td>
                        <i
                          className="fas fa-pen icon--languages"
                          title="Writing"
                        ></i>
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
                        ></i>
                        {texts.fluent}
                      </td>
                      <td>
                        <i
                          className="fas fa-book-open icon--languages"
                          title="Reading"
                        ></i>
                        {texts.fluent}
                      </td>
                      <td>
                        <i
                          className="fas fa-pen icon--languages"
                          title="Writing"
                        ></i>
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
                        ></i>
                        {texts.intermediate}
                      </td>
                      <td>
                        <i
                          className="fas fa-book-open icon--languages"
                          title="Reading"
                        ></i>
                        {texts.intermediate}
                      </td>
                      <td>
                        <i
                          className="fas fa-pen icon--languages"
                          title="Writing"
                        ></i>
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
                        ></i>
                        {texts.basic}
                      </td>
                      <td>
                        <i
                          className="fas fa-book-open icon--languages"
                          title="Reading"
                        ></i>
                        {texts.basic}
                      </td>
                      <td>
                        <i
                          className="fas fa-pen icon--languages"
                          title="Writing"
                        ></i>
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
                  >
                    <div className="design__sample sample01"></div>
                  </a>
                  <a
                    href="https://img00.deviantart.net/9fb7/i/2018/069/2/c/recuerda_siempre_mirar_el_color_de_las_banderas_by_annabranco-dc5gv8e.jpg"
                    target="_Blank"
                  >
                    <div className="design__sample sample02"></div>
                  </a>
                  <a
                    href="https://pre00.deviantart.net/3afa/th/pre/i/2018/069/e/3/basic_english_by_annabranco-dc5go6q.jpg"
                    target="_Blank"
                  >
                    <div className="design__sample sample03"></div>
                  </a>
                  <a
                    href="https://pre00.deviantart.net/6e8f/th/pre/f/2018/245/e/8/violencia1_en_by_annabranco-dclta8q.jpg"
                    target="_Blank"
                  >
                    <div className="design__sample sample04"></div>
                  </a>
                  <a
                    href="https://pre00.deviantart.net/9f40/th/pre/f/2018/065/1/7/terremoto_en_mexico_19_09_17_by_alvarobranco_dbo6p_by_annabranco-dc53k8f.jpg"
                    target="_Blank"
                  >
                    <div className="design__sample sample05"></div>
                  </a>
                  <a
                    href="https://pre00.deviantart.net/d51e/th/pre/i/2018/069/5/b/european_map__arabic__by_annabranco-dc5gve5.jpg"
                    target="_Blank"
                  >
                    <div className="design__sample sample06"></div>
                  </a>
                </div>
              </div>
            </section>
          </div>
          <div className="otherSkills__mac--keyboard"></div>
          <div className="otherSkills__mac--keyboard-keyArea">
            <p className="otherSkills__mac--keyboard-keys">
              {' '}
              . . . . . . . ...
            </p>
            <p className="otherSkills__mac--keyboard-keys">
              ... . . . . . . ..
            </p>
            <p className="otherSkills__mac--keyboard-keys">
              . . . . . . . . . .
            </p>
            <p className="otherSkills__mac--keyboard-keys">
              . . . . . . . . . .
            </p>
            <p className="otherSkills__mac--keyboard-keys">--------- ......</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
