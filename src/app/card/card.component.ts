import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IStudent } from '../Models/student';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-card',
  imports: [CommonModule,],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})




export class CardComponent {

  @Input() student! : IStudent
  @Input() ind! : number

  @Output() deleteSt = new EventEmitter<number>()
  @Output() editSt = new EventEmitter<number>()



  delete(ind : number){
    this.deleteSt.emit(ind)
  }

  edit(ind : number){
    this.editSt.emit(ind)
  }

}
