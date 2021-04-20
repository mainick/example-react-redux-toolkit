import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

const Form = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");

    const onChangeText = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim() === "") return;
        dispatch(addTodo({ title: value }));
        setValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="todo-title" value={value} placeholder="titolo attività" id="todo-title" onChange={onChangeText} />
            <button type="submit">aggiungi</button>
        </form>
    )
}

export default Form;
