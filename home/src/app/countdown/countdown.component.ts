import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faDiscord, faTwitter, faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { PasswordAccessDialogComponent } from '../password-access-dialog/password-access-dialog.component';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  faDiscord = faDiscord;
  faTwitter = faTwitter;
  faTwitch = faTwitch;
  faQuestion = faQuestion;

  @Input() debutDate!: Date;
  @Input() unlockDate!: Date;
  @Input() currentDate!: Date;
  @Input() creditPreview!: boolean;
  @Output() currentDateChange: EventEmitter<Date> = new EventEmitter<Date>();
  @Output() creditPreviewChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  pastDebut: boolean = false;

  countdownInterval: any;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    if (this.currentDate < this.debutDate) {
      this.setCountdownTimer(this.debutDate.getTime() - new Date().getTime());
      this.countdownInterval = setInterval(() => {
        let timeDifference = this.debutDate.getTime() - new Date().getTime();
  
        this.setCountdownTimer(timeDifference);
  
        if (timeDifference < 1) {
          clearInterval(this.countdownInterval);
          this.setUnlockInterval();
        }
      }, 500);
    }
    else {
      this.setUnlockInterval();
    }
  }

  setUnlockInterval(): void {
    clearInterval(this.countdownInterval);
    this.pastDebut = true;
    this.countdownInterval = setInterval(() => {
      let timeDifference = this.unlockDate.getTime() - new Date().getTime();

      this.setCountdownTimer(timeDifference);

      if (timeDifference < 1) {
        clearInterval(this.countdownInterval);
        this.currentDateChange.emit(new Date());
      }
    }, 500);
  }

  setCountdownTimer(timeDifference: number) {
    this.days = Math.floor(timeDifference / 86400000);
    this.hours = Math.floor(timeDifference % 86400000 / 3600000);
    this.minutes = Math.floor(timeDifference % 3600000 / 60000);
    this.seconds = Math.floor(timeDifference % 60000 / 1000);
  }

  // skipCountdown(): void {
  //   clearInterval(this.countdownInterval);
  //   this.currentDateChange.emit(new Date(this.unlockDate.getTime() + 1));
  // }

  // skipPhase(): void {
  //   if(!this.pastDebut) {
  //     clearInterval(this.countdownInterval);
  //     this.pastDebut = true;
  //     this.setUnlockInterval();
  //   }
  //   else {
  //     this.skipCountdown();
  //   }
  // }

  // openPasswordDialog(): void {
  //   let passwordDialog = this.dialog.open(PasswordAccessDialogComponent, {data: {'success': false}});
  //   passwordDialog.afterClosed().subscribe(response => {
  //     if(response != undefined && response.data.success) {
  //       this.creditPreviewChange.emit(true);
  //     }
  //   })
  // }

}
