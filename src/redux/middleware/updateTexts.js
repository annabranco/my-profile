import {
  CHANGE_LANGUAGE,
  LOAD_TEXTS_DATABASE_SUCCESS,
  UPDATE_TEXTS
} from '../../constants';

const updateTexts = (language, textsDatabase) => ({
  type: UPDATE_TEXTS,
  payload: textsDatabase[language]
});

export default store => next => action => {
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
};
