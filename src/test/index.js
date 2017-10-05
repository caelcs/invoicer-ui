import {jsdom} from 'jsdom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;

configure({ adapter: new Adapter() });

function noop () {
  return null;
}
require.extensions[".css", ".png"] = noop;
