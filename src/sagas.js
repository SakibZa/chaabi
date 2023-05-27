import { put, takeEvery, select } from 'redux-saga/effects';

function* calculateAccuracy() {
  const state = yield select();
  const { keyCount, correctCount } = state;
  const accuracy = (correctCount / keyCount) * 100;
  yield put({ type: 'SET_ACCURACY', payload: accuracy });
}

function* watchKeyPress() {
  yield takeEvery('KEY_PRESS', calculateAccuracy);
}

export default function* rootSaga() {
  yield watchKeyPress();
}
