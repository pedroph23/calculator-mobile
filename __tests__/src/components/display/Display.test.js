import Display from '../../../../src/components/display/Display';
import {View} from 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

beforeEach(() => {
    jest.resetModules();
    // console.log = () => {};
    // console.warn = () => {};
    // console.info = () => {};
    // console.error = () => {};
  });


  describe('Test class Display', () => {

    test('return elements in function render', () => {

      // Not tested 
      
        // Input
        const props ={
          value: '0'
        };

        // Prepare  and execute component
        const displayComponent = renderer.create(<Display />);
        const tree = displayComponent.toJSON();
        
        // Validate
        // expect(result).toEqual();
        expect(tree).toMatchSnapshot();
    });
  });
