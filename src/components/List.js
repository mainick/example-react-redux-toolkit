import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import { getTodo } from "../store/todoSlice"

const List = () => {
    const dispatch = useDispatch();
    useEffect(() => dispatch(getTodo()), []);

    const todos = useSelector(state => state.todo.todos);
    return (
        <ul id="list-todos">
            {todos.map((todo,i) => (
                <li key={i}><strong>{todo.title}</strong></li>
            ))}
        </ul>
    )
}

export default List;