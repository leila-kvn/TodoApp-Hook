import React from 'react';
import UUID from 'uuid/v1'
import ListRow from "./ListRow";
class App extends React.Component{
  constructor() {
    super();
    this.state={
      task:'',
        list:[]
    }
  }
  handelSubmit =(event) =>{
      event.preventDefault()
      let newTask={
          key: UUID,
          taskText: this.state.task,
          done: false
      }
      let tempList=this.state.list
      tempList.push(newTask)
      this.setState({
          list: tempList,
          task:''
      })

  }
  handelChange =(event) =>{
    this.setState({task:event.target.value})
  }
  handleUpdate =(key)=>{
       this.setState((prevstate)=>{
           let newstate=prevstate.list.map((row)=> {
                   if (row.key == key) {

                       row.done = !row.done
                   }
               }
           )
      }
      )
  }

  render() {
      const finalList=this.state.list.map((row)=>{
          return< ListRow id={row.key} key={row.key} isChecked={row.done} content={row.taskText} handleChecked={this.handleUpdate}/>
      })
    return(
        <React.Fragment>
            {finalList}
            <form onSubmit={this.handelSubmit}>
              <input type="text" value={this.state.task} onChange={this.handelChange}/>
              <button type="submit">Insert</button>
            </form>
        </React.Fragment>
    )
  }
}

export default App;
