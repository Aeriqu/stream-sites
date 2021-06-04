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
  creditPreview: boolean;
  debutDate: Date;
  unlockDate: Date;
  currentDate: Date;

  constructor(
    private creditService: CreditDataService,
    private secretAccess: SecretAccessService
    ) {
    this.loadCredits();
    this.creditPreview = false;
    this.debutDate = new Date("May 23 2021 09:00:00 CDT");
    this.unlockDate = new Date("May 23 2021 09:02:00 CDT");
    this.currentDate = new Date();
  }

  checkCreditPreviewUnlock(): boolean {
    return this.creditPreview;
  }

  checkBeforeUnlockDate(): boolean {
    if(this.currentDate > this.unlockDate) {
      this.secretAccess.checkToken('cG9zdCByZWxlYXNlIGFjY2VzcyB0b2tlbg==');
      return false;
    }
    return true;
  }

  loadCreditsCallback(data: any): any {
    this.credits = data;
  }

  loadCredits(): void {
    this.creditService.getCredits()
      .subscribe(data => this.loadCreditsCallback(data));
  }

  checkAccess(item: string): boolean {
    return this.secretAccess.checkAccess(item);
  }

}
