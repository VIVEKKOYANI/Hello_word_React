import React from 'react';

const TodoItem =(props) => {
    return(<li onClick={() => {
                        props.clickHendler(props.index);
                     }} className={props.details.completed ? 'completed' :
                     ''}>
                         {props.details.name}
                     </li>

    )
}
  export default TodoItem;