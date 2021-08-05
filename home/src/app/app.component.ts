import { Component } from '@angular/core';
import { CreditDataService } from './credit-data.service';
import { SecretAccessService } from './secret-access.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Aeriqu';
  credits: any;

  constructor(
    private creditService: CreditDataService,
    ) {
    this.loadCredits();
  }

  loadCreditsCallback(data: any): any {
    this.credits = data;
  }

  loadCredits(): void {
    this.creditService.getCredits()
      .subscribe(data => this.loadCreditsCallback(data));
  }

}
