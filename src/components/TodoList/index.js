import "./index.scss"

import React, {useState} from 'react';
import {Box, Button, Input,Select,MenuItem} from "@mui/material";
import {TodoItem} from "../index"

const TodoList = () => {
    const [list, setList] = useState([
        {
            id: 1,
            description: "clean  bin ",
            completed: false
        },
        {
            id: 2,
            description: "buy tickets",
            completed: false
        }
    ])

    const [value, setValue] = useState('')

    function onAdd(value) {

        const newList = [...list, {id: list.length + 1, description: value, completed:false}]
        setList(newList)

    }

    function onEdit(id) {

    }


    function onDelete(id) {
        const newList = list.filter(item => item.id === id)
        setList(newList)

    }
    const [completed, setCompleted] = React.useState(false);

    const handleChange = (event) => {
        setCompleted(event.target.value);
    };
function sortTask(status){}
    return (
        <Box className={"TodoList"}>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={completed}
                label="Age"
                onChange={handleChange}
            >
                <MenuItem value={true}>Complete</MenuItem>
                <MenuItem value={false}>Uncomplete</MenuItem>
            </Select>

            <Box className={"InputBox"}>
                <Input onChange={(event) => setValue(event.target.value)}/>
                <Button onClick={() => onAdd(value)}>ADD</Button>
            </Box>
            {list.map(item => <TodoItem key={item.id} data={item} onDelete={onDelete} onEdit={onEdit}
                                        setList={setList}/>)}
        </Box>
    );
};
export default TodoList;

/*{completed ? <TodoList list={list.filter(i => i.completed)}> ; <TodoList list={list.filter(i => !i.completed)}>}*/