import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import {
  colorWhite,
  colorBlueLight,
  colorBlueDark,
  colorBlack,
  colorGrayNormal,
  fontSubtitle,
  fontTitleAlt
} from '../../../styles/theme';
import { NotDisplayed } from '../../../styles/global';
import { ILanguageCode } from '../../../types/interfaces';

const activeFlag = css`
  opacity: 1;
  cursor: default;
`;

export const BackgroundOverlay = styled.div`
  z-index: 101;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to bottom,
    ${rgba(colorWhite, 0.6)},
    ${rgba(colorBlueDark, 0.4)},
    ${rgba(colorBlueDark, 0.6)},
    ${rgba(colorBlack, 0.9)}
  );
  height: ${`${window.innerHeight}px`};
  width: 100%;
`;
BackgroundOverlay.displayName = 'Background Overlay';

export const CheckBox = styled.input`
  margin-right: 20px;
`;
CheckBox.displayName = 'CheckBox';

export const Text = styled.p`
  margin: 5px 0;
  font-family: ${fontSubtitle};
  font-size: 0.8rem;
  text-align: center;

  @media all and (min-width: 560px) {
    font-size: 1rem;
  }
`;
Text.displayName = 'Text';

export const CheckBoxArea = styled(Text)`
  margin: 30px 0 10px;
`;
CheckBoxArea.displayName = 'CheckBox Area';

interface FlagProps extends React.ComponentPropsWithoutRef<'div'> {
  active?: boolean;
  languageSelected: ILanguageCode;
}

export const Flag = styled.div<FlagProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: none;
  margin: 10px;
  cursor: pointer;

  ${({ active }) =>
    !active &&
    css`
      ${NotDisplayed};
    `}
`;
Flag.displayName = 'Flag';

export const FlagsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  margin: 10px auto 0;

  @media all and (min-width: 560px) {
    margin: 20px auto 0;
  }
`;
FlagsWrapper.displayName = 'Flags Wrapper';

interface ImageProps extends React.ComponentPropsWithoutRef<'img'> {
  lang: ILanguageCode;
  languageSelected: ILanguageCode;
}

export const Image = styled.img<ImageProps>`
  opacity: 0.5;
  margin-top: 0;
  width: 50%;

  ${({ lang, languageSelected }) =>
    lang === languageSelected &&
    css`
      ${activeFlag}
    `}
`;
Image.displayName = 'Image';

export const Label = styled.div`
  margin-bottom: 3px;
  font-family: ${fontTitleAlt};
  font-size: 0.8rem;
  text-align: center;
`;
Label.displayName = 'Label';

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid;
  border-radius: 40px 0;
  background-image: linear-gradient(
    to bottom left,
    ${colorWhite},
    #e6f4f4,
    ${colorBlueLight}
  );
  height: 280px;
  width: 340px;
  padding: 20px;
  box-shadow: 2px 2px 10px 2px ${rgba(colorGrayNormal, 0.7)};

  @media all and (min-width: 560px) {
    border-radius: 50px 0;
    height: 260px;
    width: 480px;
  }
`;
ModalWrapper.displayName = 'Modal Wrapper';
