import React, { Component } from 'react';
import { Header, Divider, Container } from 'semantic-ui-react';
import CardsList from './CardsList';
import CardForm from './CardForm';

class App extends Component {
  state = { 
  cards: [{ id:1, front: 'This is the front.', back: 'This is the back.' }] 
  };

  addCard = (card) => {
    const { cards } = this.state;
    this.setState({ cards: [...cards, card] })
  }

  render() {
    return (
      <Container>
        <Header as='h1' textAlign="center">React Flash Cards</Header>
        <Divider />
        <CardForm addCardFunction={this.addCard}/>
        <br />
        <br />
        <CardsList cardsObject={this.state.cards}/>
      </Container>
    );
  };
};

export default App;
