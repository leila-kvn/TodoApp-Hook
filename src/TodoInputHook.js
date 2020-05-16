import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'materialize-css';
import 'uuid'


const TodoInputHook= props=> {

    return(

        <form onSubmit={props.handelAdd}>
         <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1 inputGroup-sizing-default">
                    <i className="large material-icons ">assignment</i>
                </span>

             </div>
             <input type="text" className="form-control" id="inptTask"
                   aria-describedby="basic-addon1" placeholder="Todo here..." value={props.titleTxt} onChange={props.handelChange}/>
         </div>
            <button type="submit" className={ props.editItem ?"btn btn-primary btn-success btn-block":"btn btn-primary btn-lg btn-block"} >{props.editItem ? "Edit Item" : "Add Item"}</button>
        </form>
    )
}
export default TodoInputHook;