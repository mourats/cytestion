import {
  setupCypressInterception,
  writeRecordedAPIToFixture,
} from './utils/auto-stub';
import { getRunningConfig } from './utils/running-config';

before(() => {
  cy._data = {};
  getRunningConfig().then((runningConfig) => {
    cy._config = runningConfig;
  });
});

beforeEach(() => {
  setupCypressInterception();
});
