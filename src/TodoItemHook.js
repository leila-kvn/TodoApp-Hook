import React  from 'react';

const TodoItemHook =props => {
        return (
            <>
                <li className="list-group-item text-capitalize">
                    <div className="row">
                        <h6 className="col-11">{props.data}</h6>
                        <span className=" row  align-content-center " >
                              <i className="  text-success material-icons"
                              onClick={props.editOne}>edit</i>
                              <i className=" text-danger material-icons"
                                 onClick={props.deleteOne}>delete</i>
                        </span>
                    </div>
                </li>

            </>
        );
}

export default TodoItemHook;