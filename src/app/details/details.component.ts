import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent  {

  // var1

constructor(private Route : ActivatedRoute){//ეს ინახავს იმ როუტს რომელიც ამ გვერდის ჩატვირთვისას არის და ვინახავთ Route ცვლადში
  this.Route.params.subscribe(data => console.log(data['id']))     //subscribe-ჩასაფრება როგორცვე ეს რამეს მიიღებს საბსქრაიბით ვიჭერთ არის then ის მსგავსი
}





  // var2

ngOnInit(){ //როდესაც გამოცხადდება რამე კომპონენტი თუ მინდა რომ მასზე რამე გავაკეთო მაშინ უნდა აღვწერო აქ თუ რა გააკეთოს
console.log("hello from details component")
console.log(this.Route.snapshot.queryParamMap.get("id"))
}








}











//life cycle hook //ეს არის კომპონენტის სიცოცხლის წრე

// fetch        promise           then
// params      observable       subscribe


//params არის observable ტიპი ანუ თუ არ დავუსაბსქრაიბდებით ის არ იმუშავებს
