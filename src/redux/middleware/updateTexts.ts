import { AnyAction, Dispatch } from 'redux';
import {
  CHANGE_LANGUAGE,
  LOAD_TEXTS_DATABASE_SUCCESS,
  UPDATE_TEXTS
} from '../../constants';
import { IAppState, ITexts, ITextsData } from '../../types/interfaces';

interface Action {
  payload: ITexts;
  type: string;
}

interface MiddlewareAPI<S, E extends AnyAction> {
  dispatch: Dispatch<E>;
  getState(): S;
}

export type Middleware<S, E extends AnyAction> = (
  api: MiddlewareAPI<S, E>
) => (next: Dispatch<E>) => (action: E) => ReturnType<Dispatch<E>> | null;

const updateTexts = (
  language: string,
  textsDatabase: ITextsData | Record<string, never>
): Action => ({
  type: UPDATE_TEXTS,
  payload: textsDatabase[language as keyof typeof textsDatabase]
});

const updateTextsMiddleware: Middleware<
  IAppState,
  Action
> = store => next => action => {
  if (action) {
    switch (action.type) {
      case LOAD_TEXTS_DATABASE_SUCCESS:
      case CHANGE_LANGUAGE: {
        next(action);
        const storeState = store.getState();
        return store.dispatch(
          updateTexts(storeState.language, storeState.textsDatabase)
        );
      }
      default:
        next(action);
    }
  }
  return null;
};
export default updateTextsMiddleware;
