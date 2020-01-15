import React from 'react';
import App from '../App';
import {View} from 'react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Display from '../src/components/display/Display';
import { Button, ButtonOperations, ButtonDouble } from '../src/components/button/Button';

beforeEach(() => {
  jest.resetModules();
  // console.log = () => {};
  // console.warn = () => {};
  // console.info = () => {};
  // console.error = () => {};
});
describe('Test Class App', () => {
  test('execute App and validate yours props and your type', () => {
    
    //execute component
    const component = renderer.create(<App />);
    const tree = component.toJSON();

    //validate
    expect(tree.props).toEqual(
    { 
      style: { 
        flex: 1 
      } 
    });
    expect(tree.type).toEqual('View');
  });  
  test('execute App and validate StyleSheet this component', () => {
    //input
    style = { 
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      borderColor: '#888',
      backgroundColor: '#464646',
      maxHeight: '40%' 
    }

    //execute component
    const component = renderer.create(<App />);
    const tree = component.toJSON();

    //validate
    expect(tree.children[0].props.style).toEqual(style)
  });

});


describe('Test function render',() => {

test('return JSX elements', () => {

  // inpur
  const elements = 
      <View style={{"flex": 1}}>
        <Display value="0" />
        <View style={{"flexDirection": "row", "flexWrap": "wrap"}}>
          <Button label="AC" onClick={expect.any(Function)} triple={true} />
          <Button label="+/-" onClick={expect.any(Function)} />
          <Button label="%" onClick={expect.any(Function)} />
          <ButtonOperations label="/" onClick={expect.any(Function)} operation={true} />
          <Button label="7" onClick={expect.any(Function)} />
          <Button label="8" onClick={expect.any(Function)} />
          <Button label="9" onClick={expect.any(Function)} />
          <ButtonOperations label="*" onClick={expect.any(Function)} operation={true} />
          <Button label="4" onClick={expect.any(Function)} />
          <Button label="5" onClick={expect.any(Function)} />
          <Button label="6" onClick={expect.any(Function)} />
          <ButtonOperations label="-" onClick={expect.any(Function)} operation={true} />
          <Button label="1" onClick={expect.any(Function)} />
          <Button label="2" onClick={expect.any(Function)} />
          <Button label="3" onClick={expect.any(Function)} />
          <ButtonOperations label="+" onClick={expect.any(Function)} operation={true} />
          <Button label="0" onClick={expect.any(Function)} />
          <Button label="." onClick={expect.any(Function)} />
          <ButtonDouble label="=" onClick={expect.any(Function)} operation={true} />
        </View>
      </View>

  // execute function
  const result =  new App().render();

  // validate
  expect(result).toEqual(elements);
  });

  test('return render Button', () => {
    // input
    const element = renderer.create( <Button label="0" />).toJSON()

    // validate
    expect(element).toMatchSnapshot();
  });

  test('return render ButtonDouble', () => {
    // input
    const element = renderer.create( <ButtonDouble label="0" />).toJSON()

    // validate
    expect(element).toMatchSnapshot();
  });

  test('return render ButtonOperations', () => {
    //input
    const element = renderer.create( <ButtonOperations label="0" />).toJSON()

    // validate
    expect(element).toMatchSnapshot();
  });
});

describe('Test function addDigit', () => {
  test('return true in clearDisplay, when this.state.displayValue === 0', () => {
    //input 
    const input = '7';

    //execute 
    new App().addDigit(input);
    
    // validate
    // expect(result);
  });

  test('return true in clearDisplay, when this.state.displayValue thats equal true', () => {

      // Instance
      const app = new App();

      // Mock
      app.state.displayValue = '1';
      app.state.clearDisplay = true;

      // Execute
      app.addDigit('7');
      
      // Validate
      expect(app.state.clearDisplay).toBe(true);

    });

    test('return null when n equal "." and this.state.displayValue.includes(.)', () => {

      // Instance
      const app = new App();

      // Mock
      app.state.displayValue = '.';

      // Execute
      const result = app.addDigit('.');
      
      // Validate
      expect(app.state.displayValue).toBe('.');
      expect(result).toEqual(null);

    });

    test('return empty string in currentValue, when clearDisplay be equal true', () => {

      // Instance
      const app = new App();

      // Mock
      app.state.clearDisplay = true;

      // Execute
      const result = app.addDigit('7');
      
      // Validate
      expect(app.state.clearDisplay).toBe(true);

    });

    test('return this.state.displayValue in currentValue, when clearDisplay be equal false', () => {
     
      //Not tested

      //Prepare
      const displayComponent = renderer.create(
        <App />
      );
      const tree = displayComponent.toJSON();

      const setState = jest.fn(() => {
        return { displayValue: '1999' };
      });

      // Instance
      const app = new App();

      app.setState = setState;
      // Mock
      app.state.displayValue = '1';      
      app.state.clearDisplay = false;
      // Execute
      const result = app.addDigit('7');
      
      
      // Validate
      // console.log(tree.children[0].children[0]);
      console.log(tree.children[0].children);

      expect(app.state.clearDisplay).toBe(false);
      // expect(tree.children[0].).toEqual();

    });
});
