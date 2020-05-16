import React  from 'react';
import TodoItemHook from "./TodoItemHook";

const TodoList=(props)=> {
    // console.log(props)
        return (
            <>
                <ul className="list-group">
                    <h3 className="text-center">Your Todo List</h3>
                    {
                        props.list.map(item =>{
                            return(
                                <TodoItemHook  key={item.key} data={item.title}
                                deleteOne={()=> props.handelDelete(item.key)}
                                editOne={()=> props.handelEdit(item.key)}
                                />
                            )
                        })
                    }
                </ul>
                <button  type="button" className="btn btn-lg btn-block btn-danger" 
                         onClick={props.clearList}>Clear List</button>
            </>
        );
}

export default TodoList;