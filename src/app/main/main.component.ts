import { Component } from '@angular/core';
import { IStudent } from '../Models/student';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../card/card.component";
import { DisplayDataComponent } from "./display-data/display-data.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [CommonModule, FormsModule, CardComponent, DisplayDataComponent, RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  id = 5

  studentArr : IStudent[] = []   
  isVisible = false

  newStudent : IStudent = {
    name: "",
    age: null,
    grade: "",
    subject: '',
    isEnrolled: false,
    address: {
      street: '',
      city: '',
      zip: null
    },
    activeType: 0,
  }

  save( form : NgForm){

    if(form.valid){  
      this.studentArr.push({...this.newStudent, address:{...this.newStudent.address}})    
    }
    form.resetForm() 

  }

  
  showList(){
    this.isVisible = !this.isVisible
  }

  deleteStudent(ind : number){
    this.studentArr.splice(ind,1)
  }

  editStudent(ind : number){
    this.newStudent = this.studentArr[ind] 
    this.studentArr.splice(ind,1)


  }

}
