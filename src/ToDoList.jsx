import React from 'react';
import {ImCancelCircle} from 'react-icons/im';

const ToDoList = (props) => {


    return (
        <>
            <div className='todo_style'>
                <ImCancelCircle className='fa fa-times' onClick={()=>{
                    props.remove(props.id)
                }}/>
                <li> {props.text} </li>
            </div>
        </>
    );  
}

export default ToDoList
