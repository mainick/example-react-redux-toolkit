import { useSelector } from "react-redux";
import { selectTodos } from "../store/todoSlice";

const List = () => {
    const todos = useSelector(selectTodos);
    return (
        <ul id="list-todos">
            {todos.map((title,i) => (
                <li key={i}><strong>{title}</strong></li>
            ))}
        </ul>
    )
}

export default List;