import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent {


  @Input() name: string =''; //nome da variavel universal
  @Input() user!: {email: string; senha:string } //! serve para inicializar uma variável, é uma das opções
  @Input() hobbie!: string[];

}
