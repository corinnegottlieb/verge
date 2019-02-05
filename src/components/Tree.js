import React from 'react';
import Tree from 'react-d3-tree';
import { observer, inject } from 'mobx-react';
 
@inject("lumberYard")
@observer
class MyComponent extends React.Component {
  render() {
    return (
      <div id="treeWrapper" style={{width: '50em', height: '20em'}}>
 
        <Tree data={this.props.lumberYard.currentTOR} />
 
      </div>
    );
  }
}

export default MyComponent