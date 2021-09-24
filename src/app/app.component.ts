import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    console.log(`timeout is over`);
    // setTimeout(()=>{this.img ='https://camo.githubusercontent.com/9f0650b3fb7ea5203e364269af3d4f7e5eb243f3c35fecfc3ce42361797908c5/68747470733a2f2f69302e77702e636f6d2f73746f726167652e676f6f676c65617069732e636f6d2f626c6f672d696d616765732d6261636b75702f312a33535666426b4e5a4932662d737370697135397863772e706e673f726573697a653d3339312532433332312673736c3d31';}, 5000)
  }
  inputValue = '';
  title = 'Dynamic-title';
number = 40;
// img = 'https://pluralsight2.imgix.net/paths/images/angular-14a0f6532f.png';
  onInput(event: KeyboardEvent) {
    console.log("Event", event);
    this.inputValue = (<HTMLInputElement>event.target).value;
  }

  onClick() {
    console.log(`Click`);
  }
}
