import React from 'react';
import Listitems from './listitems';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state= {
      items:[],
      currentItems: {
        text:'',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.setUpdate= this.setUpdate.bind(this);
  }

  handleInput = e => {
    this.setState({
      currentItems: {
      text: e.target.value , 
      key: Date.now()}
     })
    
  }
   



  addItem = e => {
    e.preventDefault();
    const item = this.state.currentItems;
    
    if (item.text!==''){
      const newItems = [...this.state.items, item];
    
      this.setState({
        items: newItems,
        currentItems: {
          text:'',
          key: '',
        }
       })
    }
     
  }

  setUpdate = (text,key) => {
    const items = this.state.items ;
    items.forEach(item =>{  
      if (item.key===key){
       item.text =text;
      }
    })
    this.setState({
      items:items
    })
  }


   render () {
     return (
      <div className="App"> 
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter text" 
            value={this.state.currentItems.text} 
            onChange={this.handleInput}></input>
            <button type="submit">Add</button>
          </form>
        </header>
        <Listitems items = {this.state.items}

        setUpdate={this.setUpdate}></Listitems>
      </div>
     );
   }
}

export default App;
