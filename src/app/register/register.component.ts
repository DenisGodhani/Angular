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
  ChildrenName:any = [];
  ChildrenAge:any = [];
  childs = [{"name":"child1","age":"age1"},{"name":"child2","age":"age2"},{"name":"child3","age":"age3"},{"name":"child4","age":"age4"},{"name":"child5","age":"age5"}]
  file;
  imgURL;
  imagePath;
  message;
  public saveCustomer() {
    /* Typically this method will be used to send the contact form to a server to save it*/
  }

  constructor() { }

  ngOnInit() {
  }
  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
    console.log(inputNode);
    this.file = inputNode.files[0]
    console.log(this.file);
    if (this.file.length === 0)
      return;
 
    var mimeType = this.file.type;
    console.log(mimeType);
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    reader.readAsDataURL(this.file); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
      console.log(this.imgURL);
    }
  
  }
  onChange(deviceValue) {
    this.Category = deviceValue;
}

}
