import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'angular-graphcool-chat';
  constructor(private apoolo: Apollo){
   // this.createUser()
    this.allUser();
  }

  allUser():void {
    const body = {
      query: `query {
        allUsers(filter : { id: "cjourdaxz0k2e0162rxap60ym"}) {
          id
        }
      }`
    }

    this.apoolo.query({
      query: gql`query {
        allUsers{
          id
          name
          email
        }
      }`
    }).subscribe(resp => console.log('Query', resp));
  
    
  }

  createUser(): void {

    this.apoolo.mutate({
      mutation: gql`
        mutation CreateNewUser($name: String!, $email: String!, $password: String!){
        createUser(email: $email, name: $name, password: $password){
          id
          name
          email
        }
      }
      `,
      variables: {
        name: 'nome do usuario',
        email: 'nomend@meikd.com',
        password: '1234565789'
      }
    }).subscribe(response => console.log('mutation', response))

  }

}
