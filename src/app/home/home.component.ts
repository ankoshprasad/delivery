import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from './../utilities/services/commonservice.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  getListData: any;
  sum:number;
  constructor(private modalService: NgbModal,private commonserviceService: CommonserviceService) { }

  ngOnInit() {
	  this.getHeroes();
  }
  getTreatment(data) {
	console.log(data);
    let str = '<div class="demooutput">'
    let arr = data.split(',');
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        str += '<span class="' + arr[i] + '">' + arr[i] + '</span>'
      }
    }
    str += '</div>'
    return str
  }
getHeroes(){
   this.commonserviceService.getData().subscribe(getListData =>{
		  this.getListData = getListData;
		  console.log(this.getListData);
		  this.sum=0;
  for(let a of this.getListData){
  this.sum=this.sum+a.Expenses;
	 
  }
   console.log(this.sum);
  },
	  (error) => {
	  alert('No data');
	  }
  );
}
}
