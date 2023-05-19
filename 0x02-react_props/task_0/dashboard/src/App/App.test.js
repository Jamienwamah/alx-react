import { shallow } from 'enzyme';
import App from './App';

describe('Test App.js', () => {
  it('App without crashing', (done) => {
    expect(shallow(<App />).exists());
    done();
  });
});
