import React from 'react';
import renderer, { act } from 'react-test-renderer';
import Form from './Form';

describe('Form component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Form createTodo={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls createTodo function with correct parameters on form submission', () => {
    const createTodoMock = jest.fn();
    const component = renderer.create(<Form createTodo={createTodoMock} />);
    const instance = component.root;

    const titleInput = instance.findByProps({ placeholder: 'Title' });
    const descriptionInput = instance.findByProps({ placeholder: 'Description' });
    const form = instance.findByType('form');

    act(() => {
        titleInput.props.onChange({ target: { value: 'Test Title' } });
        descriptionInput.props.onChange({ target: { value: 'Test Description' } });
    });
  
    act(() => {
        form.props.onSubmit({ preventDefault: () => {} });
    });

    expect(createTodoMock).toHaveBeenCalledWith('Test Title', 'Test Description', false);
  });
});
