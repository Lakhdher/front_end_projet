import {Component, Inject} from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose, MatDialogModule,
} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
export interface DialogData {
  email: string;
  username: string;
  password: string;
}
@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,

  ],
})
export class EditProfileDialog {
  username: string = "";
  email: string = "";
  password: string="";
  constructor(
    public dialogRef: MatDialogRef<EditProfileDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.username = data.username;
    this.email = data.email;
  }
  proceed() {
    this.dialogRef.close({
      username: this.username,
      email: this.email,
      password: this.password,
    } );
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
