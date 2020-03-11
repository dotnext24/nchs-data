import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { StickyTable, Row, Cell } from 'react-sticky-table';

class App extends Component  {
  constructor(props) {
    super(props);

    var rows = [];
    var cells;

    for (var r = 0; r < 50; r++) {
      cells = [];

      for (var c = 0; c < 20; c++) {
        cells.push(<Cell key={c}>{(r === 0 ? 'Header ' : 'Cell ') + c}</Cell>);
      }

      rows.push(<Row key={r}>{cells}</Row>);
    }

    this.state = {
      rows: rows
    };
  }
  render(){
  return (
    <div className="main">
      <h2 class="main_head ui header">
        NCHS - Leading Causes of Death: United States
  <div class="sub header">This dataset presents the age-adjusted death rates for the leading causes of death.</div>
      </h2>
      <div class="ui fluid card">
        <div class="content"><div class="header">Filter By</div></div>
        <div class="content">
          <form class="ui form">
            <div class="equal width fields">
              <div class="field">
                <label>State</label>
                <div class="ui input"><input type="text" placeholder="State" /></div>
              </div>
              <div class="field">
                <label>Cause name</label>
                <div class="ui input"><input type="text" placeholder="Cause name" /></div>
              </div>
              <div class="field">
                <label></label>
                <button style={{marginTop:'20px'}} class="ui secondary button">Filter</button>
              </div>
            </div>
          </form>
        
        <div class="grid-container" style={{width: '100%', height: '400px'}}>

        <StickyTable stickyColumnCount={0}>{this.state.rows}</StickyTable>
        </div>
        
        </div>
      </div>

    </div>
  );
  }
}

export default App;
