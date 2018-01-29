import { Component } from '@angular/core';

import { MessageService } from './services/message.service';
;@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private messageService: MessageService) {}
    
  sendMessage(): void {
      // send message to subscribers via observable subject
      this.messageService.sendMessage('Message from Home Component to App Component!');
  }

  clearMessage(): void {
      // clear message
      this.messageService.clearMessage();
  }

}
