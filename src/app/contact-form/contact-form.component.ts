import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Phone'}
  ];

  log(obj) {
    console.log(obj);
  }

  onSubmit(fg) {
    // console.log(JSON.stringify(fg.value));
    console.log(fg);
  }

}
