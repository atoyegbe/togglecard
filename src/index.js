import React, { Component } from "react";
import ReactDOM from "react-dom";
import Card from './Componets/Card'

import "./styles.css";
import "./Componets/Card.css";
import styles from './modules/button.module.css';


class App extends Component {
  state = {
    persons: [
      { id:'fddfgtd', name: "adeyemi", age:"20"},
      {id: 'loml', name: "faith", age:"21" }
    ],

    showCard: false,
    classess: 'Card'
  }

 
  toggleHandler = () => {
   const showCard = this.state.showCard;
   this.setState({showCard: !showCard})

  };

  deleteCard = (card) => {
    const persons = [...this.state.persons];
    persons.splice(persons, 1);
    this.setState({persons: persons});

  }

  
  darkMode = () => {
    let classess = [...this.state.classess];
    classess = 'black-mode'
    
    this.setState({classess: classess})

  }


  render() {
  // const this.state.persons = ;


  let persons = null;

  if(this.state.showCard) {
    persons = (
      <div>
        <button className={styles.index} onClick={this.darkMode}> Dark Mode</button>
      {
         this.state.persons.map((person, index) => {
           return <Card 
                    name={person.name} 
                    className={this.state.classess}
                    age={person.age} 
                    click={() => this.deleteCard(index)}
                    key={person.id} />
        })
        }

      </div>
    ) 
  }

    return (
      <div className="App">
        <button className={styles.index} onClick={this.toggleHandler}> Toggle </button>
        { persons}
        
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
