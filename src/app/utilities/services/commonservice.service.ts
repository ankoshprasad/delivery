import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor(private http:Http) { }
  
  getData(){
	  let url = "http://dummy.restapiexample.com/api/v1/employees";
	  return this.http.get(url)
	 .map(
	 (res) =>{
	let resData = /*res;*/ [{"id":1,"Date":"8/02/2020","day":"saturday","Expenses":750,"Treatment":"OPD,MEDICINES","Result":"green","Description":"Doctor Told a good news and given some medication like Folic acid"},{"id":2,"Date":"15/02/2020","day":"Saturday","Expenses":2565,"Treatment":"OPD,MEDICINES,ULTRASOUND SCAN","Result":"yellow","Description":"Doctor Suggest an immediate scan after getting a small bleeding and suggested a medication to increase the hormone"},{"id":3,"Date":"22/02/2020","day":"Saturday","Expenses":2550,"Treatment":"OPD,MEDICINES,ULTRASOUND SCAN","Result":"red","Description":"After second scan also there were no improvement so doctor suggested to terminate the baby with the help of some medicines"},{"id":4,"Date":"07/03/2020","day":"Saturday","Expenses":2960,"Treatment":"OPD,MEDICINES,ULTRASOUND SCAN","Result":"green","Description":"Doctor given some medicine and told everything thing is fine now,you can try again after 3 months"}];
	console.log(resData);
    return 	resData;
	
	 }
	 );
  }
}
