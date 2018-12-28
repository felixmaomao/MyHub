import React, { Component } from 'react';
import {Button,Layout} from 'antd';
import EpicPanel from './Epic/EpicPanel';

import './App.css';


const {
  Header, Footer, Sider, Content,
} = Layout;

class App extends Component {
  render() {

    var telehealthParams={
        "env":"dev"
    }

    return (
      <div className="App">  
        <Layout>
              <Header>My Hub</Header>
              <Content>
                 <EpicPanel telehealthParams={telehealthParams}></EpicPanel>
              </Content>
              <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
