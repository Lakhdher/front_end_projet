import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../../EditProfileDialog/dialog.component";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-delete-profile-dialog',
  templateUrl: './delete-profile-dialog.component.html',
  styleUrls: ['./delete-profile-dialog.component.css'],
  standalone: true,
  imports: [MatDialogModule, FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, NgStyle,]
})
export class DeleteProfileDialogComponent {
  constructor(   public dialogRef: MatDialogRef<DeleteProfileDialogComponent>,
                 @Inject(MAT_DIALOG_DATA) public data: DialogData,) {
  }
  proceed() {
    this.dialogRef.close(true);
  }
  onNoClick(): void {
    this.dialogRef.close(false);
  }

}
