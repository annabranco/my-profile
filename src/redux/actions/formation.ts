import {
  IActionDispatchFunction,
  IActionDispatchFunctionWithRequest,
  IActionRequestFunction,
  IFormation
} from '../../types/interfaces';
import {
  LOAD_FORMATION,
  LOAD_FORMATION_SUCCESS,
  LOAD_FORMATION_FAIL
} from '../../constants';

export const loadFormationRequest: IActionRequestFunction = () => ({
  type: LOAD_FORMATION
});

export const loadFormationSuccess: IActionDispatchFunction<
  IFormation[]
> = formation => ({
  type: LOAD_FORMATION_SUCCESS,
  payload: [...formation]
});

export const loadFormationFail: IActionDispatchFunction<Error> = error => ({
  type: LOAD_FORMATION_FAIL,
  payload: error
});

export const loadFormation: IActionDispatchFunctionWithRequest<
  IFormation[]
> = request => dispatch => {
  dispatch(loadFormationRequest());
  request
    .then(formation => formation && dispatch(loadFormationSuccess(formation)))
    .catch(error => dispatch(loadFormationFail(error)));
};
