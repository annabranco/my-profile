import React from 'react';
import { useSelector } from 'react-redux';
import { func } from 'prop-types';
import { instructionsTextSelector } from '../../../redux/selectors';
import AppModal from '../../mainComponents/AppModal';
import { ArrowsDown, Swipe } from '../../../assets/images';
import {
  ArrowIcon,
  LineOfArrows,
  MoreText,
  ScrollDownDisplay
} from '../../sections/MyInfoPage/styles';
import { ArrowsImage, InstructionsText, SwipeImage } from './styles';

const SwipeInstructions = ({ onCloseInstructions }) => {
  const text = useSelector(instructionsTextSelector);

  const onClickScreen = ev => {
    ev.stopPropagation();
    onCloseInstructions(false);
  };

  return (
    <AppModal closeAction={onClickScreen}>
      <SwipeImage src={Swipe} alt="" />
      <InstructionsText>{text.swipe}</InstructionsText>
      <InstructionsText>{text.button}</InstructionsText>
      <ArrowsImage src={ArrowsDown} alt="" />
      <ScrollDownDisplay sections>
        <MoreText>{text.buttonText}</MoreText>
        <LineOfArrows>
          <ArrowIcon className="fas fa-angle-double-down" sections />
        </LineOfArrows>
      </ScrollDownDisplay>
    </AppModal>
  );
};

SwipeInstructions.propTypes = {
  onCloseInstructions: func.isRequired
};

export default SwipeInstructions;
