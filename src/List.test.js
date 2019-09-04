import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
//import STORE from './STORE'
import renderer from 'react-test-renderer';


describe('<List />', () => {
    //SMOKE
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List header = "testHeader" cards = {[{title: 'test', content: 'testcontent'}, {title: 'test2', content: 'tstcnt'}]} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

describe('<List />', () => {
    //SCREENSHOT
    it('renders the UI as expected', () => {
        const tree = renderer.create(<List header = "testHeaderS" cards = {[{title: 'testS', content: 'testcontentS'}, {title: 'test2S', content: 'tstcntS'}]} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
