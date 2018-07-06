import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './components/tabs/'
import TabsPanel from './components/tabs/panel'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <Tabs id="tabs-example-default" variant="default">
            <TabsPanel label="กระทู้ที่ฉันตั้ง">Item One Content</TabsPanel>
            <TabsPanel label="กระทู้ที่ฉันตอบ">Item Two Content</TabsPanel>
            <TabsPanel label="กระทู้โปรดของฉัน">Item Three Content</TabsPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default App;
