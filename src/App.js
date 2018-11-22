import React, { Component } from 'react';
import {Daradadat} from './daradadat';
import {Form} from './from';

// const list = [
//   "first element",
//   "second element",
//   "thirth element",
//   "last element"
// ];
class App extends Component {
  constructor(){
    super();
    this.state = {list:[
      "first element",
      "second element",
      "thirth element",
      "last element"
    ]}

    this.listeyeekle=this.listeyeekle.bind(this);
  }

  listeyeekle(val){
    // let templist = this.state.list;
    // templist.push(val);
    // this.state.list = templist;
    this.state.list.push(val);
    console.log(this.state.list);
    //this.setState({list:templist})
    this.setState(this.state.list);
    // Bu da çalıştı acaba mantık hatası falan var mı yoksa mantıklı mı 
    //this.setState(this.state.list);
    //console.log(list);
  };

  render() {
    const propstatic = "first prop example"
    

    return (
      <div className="App">
        ne yazdıydıkdı
    
        <Daradadat firstprop={propstatic} mylistprop={this.state.list}></Daradadat>

        <br></br>
        <Form yeniliste={this.listeyeekle}></Form>
      </div>
      
    );
  }
}

export default App;
