import "./index.scss"
import React, {useState} from 'react';
import {Box, Button, Checkbox, Input} from "@mui/material";

const TodoItem = ({data, onDelete, onEdit, setList}) => {
    const [editable, setEditable] = useState(false)
    const [value, setValue] = useState(data.description)

    function saveItem(id) {
        setList(list => list.map((data) => {
            if (data.id === id) {
                return {...data, description: value}
            } else {
                return data
            }

        }))
        setEditable(!editable)
    }


    return (
        <Box>
            {
                editable ?
                    <Box>
                        <Input  value={value} onChange={(event) => setValue(event.target.value)}/>
                        <Button onClick={() => saveItem(data.id)}>Save</Button>
                    </Box>
                    :
                    <Box>
                        <span>{data.id} {data.description}</span>
                        <Button onClick={onDelete}>X</Button>
                        <Button onClick={onEdit => (setEditable(true))}>Edit</Button>
                        <Checkbox></Checkbox>
                    </Box>
            }
        </Box>
    );
};

export default TodoItem;