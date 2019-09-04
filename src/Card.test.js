import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';


describe('<Card />', () => {
    //SMOKE
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card title='test' content='testcontent'/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

describe('<Card />', () => {
    //SCREENSHOT
    it('renders the UI as expected', () => {
        const tree = renderer.create(<Card title='testScreenshot' content='testContentScreenshot' />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});


