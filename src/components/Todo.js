import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addTodo, deleteTodo, editTodo } from '../actions/index'

const Todo = () => {

    const [inputData, setInputData] = useState('');

    const dispatch = useDispatch();

    // useEffect(()=>{
    //     console.log("heeeee");
    // },[])

    return (
        <>
            <Form className='formLogin'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" value={inputData} onChange={(event) => setInputData(event.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={() => dispatch(addTodo(inputData), setInputData(''))} > Submit </Button>
            </Form>
        </>
    )
}

export default Todo