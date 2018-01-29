import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit, OnDestroy {

  message: any;
  subscription: Subscription;

  constructor(private messageService: MessageService) {
      // subscribe to home component messages
      this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; });
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }


  ngOnInit() {
  }

}
