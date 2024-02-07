import renderer from 'react-test-renderer';
import Todo from './Todo';

describe('Todo component', () => {
    it('renders correctly', () => {
        const todo = {
            _id: '1',
            title: 'Test Todo',
            description: 'Test Description',
            completed: false,
            createdAt: new Date()
        };

        const tree = renderer.create(
            <Todo
                todo={todo}
                deleteTodo={() => {}}
                updateTodo={() => {}}
                titleClick={() => {}}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('calls deleteTodo function with correct id when delete button is clicked', () => {
        const deleteTodoMock = jest.fn();
        const todo = {
            _id: '1',
            title: 'Test Todo',
            description: 'Test Description',
            completed: false,
            createdAt: new Date()
        };

        const component = renderer.create(
        <Todo
            todo={todo}
            deleteTodo={deleteTodoMock}
            updateTodo={() => {}}
            titleClick={() => {}}
        />
        );

        const instance = component.root;
        const deleteButton = instance.findByProps({ className: 'text-xl' });
        deleteButton.props.onClick();

        expect(deleteTodoMock).toHaveBeenCalledWith('1');
    });
});
