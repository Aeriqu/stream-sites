import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SecretAccessService } from '../secret-access.service';

@Component({
  selector: 'app-password-access-dialog',
  templateUrl: './password-access-dialog.component.html',
  styleUrls: ['./password-access-dialog.component.scss']
})
export class PasswordAccessDialogComponent implements OnInit {

  error: boolean = false;

  constructor(private secretAccess: SecretAccessService,
    private dialogRef: MatDialogRef<PasswordAccessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  submitCheck(): void {
    let token = window.btoa(this.data.password);

    if(this.secretAccess.checkToken(token)) {
      this.data.success = true;
      this.dialogRef.close({ data: { success: 'true' }});
    }
    else {
      this.error = true;
    }
    
  }

  close(): void {
    this.dialogRef.close();
  }

}
