import {
  LOAD_FORMATION,
  LOAD_FORMATION_SUCCESS,
  LOAD_FORMATION_FAIL
} from '../../constants';

export const loadFormationRequest = () => ({
  type: LOAD_FORMATION
});

export const loadFormationSuccess = formation => ({
  type: LOAD_FORMATION_SUCCESS,
  payload: [...formation]
});

export const loadFormationFail = error => ({
  type: LOAD_FORMATION_FAIL,
  payload: error
});

export const loadFormation = request => dispatch => {
  dispatch(loadFormationRequest());
  request
    .then(
      ({ formation }) => formation && dispatch(loadFormationSuccess(formation))
    )
    .catch(error => dispatch(loadFormationFail(error)));
};
