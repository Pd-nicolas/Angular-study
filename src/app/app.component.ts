import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Joaquim'; //nome da variavel apenas para o componente pai

  userObject = {
    email: 'pedronicks25@gmail.com',
    senha: '123456'
  }

  hobbieSupremo = ['tocar, ler, pular'];

  title = 'project';
}
