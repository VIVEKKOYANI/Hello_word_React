import React from 'react';

const TodoForm = (props) => {
    return (
        <form>
            <input type = "text"
                    value={props.currentTask}
                    onChange={props.updateTask}
                    />
        </form>
    )
}

export default TodoForm;