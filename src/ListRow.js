import React from 'react';
class ListRow extends React.Component{
  constructor() {
      super();
  }
  render(){
      return(
          <div>
              <input type="checkbox" value={this.props.isCheckedhecked} onChange={()=>this.props.handleChecked(this.props.id)}/>
              {this.props.content}
          </div>
      )
  }
}

export default ListRow;