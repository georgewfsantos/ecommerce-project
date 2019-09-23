import { all } from 'redux-saga/effects';

import cart from './sagas';

export default function* rootSaga() {
  return yield all([cart]);
}
