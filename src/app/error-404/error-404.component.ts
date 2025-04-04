import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-error-404',
  imports: [RouterModule,],
  templateUrl: './error-404.component.html',
  styleUrl: './error-404.component.scss'
})
export class Error404Component {

  constructor(private Myrouter : Router) { //ეშვება ყველაზე პირველი

  }

  // routing from programebility

  goBack(){
    this.Myrouter.navigateByUrl("/Main")
  }
}
