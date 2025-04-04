import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error-404/error-404.component';
import { DetailsComponent } from './details/details.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
      {path:"", redirectTo:"Main", pathMatch:"full"}, //აუცილებლად უნდა ეწეროს ეს თავში
      {path:"Main", component:MainComponent},  
      {path:"Home", component:HomeComponent},
      {path:"details/:id", component:DetailsComponent},
      {path:"user", component:UsersComponent},



      {path:"**", component:Error404Component}  //თუ არ მოიძებნა მაშინ ერორზე გადავიდეს! აუცილებლად უნდა ეწეროს ეს ბოლოში "**" ეს არის ვაილდ ქარდი და ნიშნავს რომ თუ რამე არ მოიძებნა გადავიდეს აქ
];
