import TodoInputHook from "./TodoInputHook";
import TodoListHook from "./TodoListHook";
import React , {useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';


const initialValue={
    des:'',
    list:[],
    //id:uuidv4(),
    clearList:false,
    editItem:false
}
const TodoReducer= (state,action) =>{
     // console.log(state)
    switch(action.type) {
        case 'field':
            return {
                ...state,
                [action.field]:action.value,
            }
        case 'add': {
            const newItem={
                key:uuidv4(),
                title:state.des,
            }
            return {
                ...state ,
                list: [...state.list , newItem] ,
                des: '',
                clearList:false,
                editItem: false
            }
        }
        case 'txtChange':
            return {
                   ...state ,
                   des: action.value
            }
        case 'clear':
            return {
                       ...state ,
                       clearList: true ,
                       list: []
            }
        case 'delete':{
            const filterditem= state.list.filter ( item =>
                    item.key !== action.value )
            return {
                list: filterditem
            }
        }
        case 'edit': {
            const filterditem= state.list.filter ( item =>
                    item.key !== action.value )
            const oneItem=state.list.find(item=>
                item.key === action.value)
            return {
                list: filterditem,
                des: oneItem.title,
                editItem:true
            }
        }
        default:
            return {state}
    }
}
function  AppHook( )
{
  const [state,dispatch]= useReducer(TodoReducer,initialValue);
  const {des,list,editItem}=state;

  // const handelChange = e=>{
  //     dispatch({type:'txtChange', value:e.target.value})
  // }
  const handelAdd =e=>{
      dispatch({type:'add', value:'w'})
      e.preventDefault()

  }
    return (
    <div className="container">
        <div className="row">
            <div className="col">
            </div>
            <div className="col-6">
                <TodoInputHook titleTxt={des}
                               handelChange={(e)=> dispatch({type:'txtChange', value:e.target.value})}
                               handelAdd={handelAdd} editItem={editItem}/>
            </div>
            <div className="col">
            </div>
        </div>
        <div style={{marginTop: 30}}>
            <TodoListHook list={list} clearList={()=>dispatch( {type:'clear'})}
                          handelDelete={(key)=>dispatch({type:'delete',value:key})}
                          handelEdit={(key1)=>dispatch({type:'edit',value:key1})}
            />
        </div>
    </div>
    )
}
export default AppHook