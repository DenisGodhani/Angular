import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  FirstName: string = "";
  LastName: string = "";
  Category: string = "";
  Gender: string = "male";
  isDeleted: boolean = false;
  date = new FormControl(new Date());

  public saveCustomer() {
    /* Typically this method will be used to send the contact form to a server to save it*/
  }

  constructor() { }

  ngOnInit() {
  }

  onChange(deviceValue) {
    alert(this.Category)
    console.log(deviceValue);
}

}
