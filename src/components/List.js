import { useSelector } from "react-redux";

const List = () => {
    const todos = useSelector(state => state.todo.todos);
    return (
        <ul id="list-todos">
            {todos.map((title,i) => (
                <li key={i}><strong>{title}</strong></li>
            ))}
        </ul>
    )
}

export default List;