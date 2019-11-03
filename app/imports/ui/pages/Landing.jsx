import React from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className={'background image'}>
        <Grid container stackable centered columns = {3}>

          <Grid.Column>
            <Icon size='huge' name ='users' inverted/>
            <Header as = 'h1'>Multiple Users</Header>
            <Header as = 'h3'>Thsi address book enables any number of users
            to register and save their business contacts. You can only see the contacts you have created.</Header>
          </Grid.Column>
          <Grid.Column>
            <Icon size='huge' name ='file alternate' inverted/>
            <Header as = 'h1'>Contact Details</Header>
            <Header as = 'h3'>For each contact, you can save their name, address, and phone number.</Header>
          </Grid.Column>
          <Grid.Column>
            <Icon size='huge' name ='calendar check' inverted/>
            <Header as = 'h1'>Timestanped Notes</Header>
            <Header as = 'h3'>Each time you make </Header>
          </Grid.Column>


        </Grid>
        </div>
    );
  }
}

export default Landing;
