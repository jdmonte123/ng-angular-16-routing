import { Component } from '@angular/core';
import { User } from '../user'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

userModel = new User('Mark123', 'm@gmail.com', '9999', '123456')
}
