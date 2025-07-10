import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  name = 'Guest'
  message = '';
  firstName = '';
  textMessage = '';
  myName = 'Guest';

  onClickHandler(event: any){
  }

  onLogin(){
    this.name = 'Login'
  }

  onLogout(){
    this.name = 'Logout'
  }

  onSend(myinput: any){
    this.message = myinput.value;
  }
}
