import React from 'react';
import { Card } from 'semantic-ui-react';


class FlashCard extends React.Component {
  state = { flipped: false };

  handleClick = () => {
    this.setState({
      flipped: !this.state.flipped
    });
  }

  editCard = () => {
    
  }

  deleteCard = (flash) => {
    
  }

  render() {
    const { flipped } = this.state;
    const { cardObject: {front, back} } = this.props;
    return (
      <Card>
        <button onClick={this.handleClick}>Flip</button>
        <Card.Content>
          <Card.Header textAlign='center'>{ flipped ? back : front }</Card.Header>
        </Card.Content>
        <button onClick={this.editCard}>Edit</button>
        <button onClick={this.deleteCard}>Delete</button>
      </Card>
    )
  }  //onClick={this.deleteName.bind(null, name)}
}

export default FlashCard;