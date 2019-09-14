import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import ComponentList from './components/list';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import 'antd/dist/antd.css';

export default class Root extends React.Component{
  render(){
    return (
      //这里替换了之前的Index,变成了程序的入口
      <Router>
        <div>
          <Route exact component={Index} path='/'  />
          <Route component={ComponentList} path="list" />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<Root/>,document.getElementById('example'));
