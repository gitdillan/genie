import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ])

  magics=[

    {mname:'UX UI Design', micon:'design.svg', mcontent:'Interactive and responsive content enable better user experience in every device. Genie always gives you the most user friendly experience that is enjoyable for the end user.'},
    {mname:'Development', micon:'bug.svg', mcontent:'Genie has the world class design and coding experience. Whatever be you requirement; Genie knows how to make it work in your website.'},
    {mname:'Branding & Marketing', micon:'search.svg', mcontent:'Use Genie’s innovative products to boost your business and improve your brand value. Genie comes up with most subtle and effective way to enhance your business.'}
  ]

  ContactForm
  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar) {

    this.ContactForm=this.fb.group({
      firstname:['',[Validators.required]],
      secondname:['',[Validators.required]],
      email:['',[Validators.required, Validators.email]],
      phonenumber:['',[Validators.required, Validators.minLength(10)]],
      message:['', [Validators.required, Validators.maxLength(250)]]

    })

   }

  get lamp() {return this.ContactForm.controls}

   onSubmit(){
     let formdata=this.ContactForm.value;
   }

   penSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }


  ngOnInit() {
  }

}
