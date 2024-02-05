import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {DatePipe, NgForOf, NgIf, TitleCasePipe} from "@angular/common";
import {DefaultImagePipe} from "./pipes/default-image.pipe";
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment.development";
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatDialog} from "@angular/material/dialog";
import {EditProfileDialog} from "./dialog/EditProfileDialog/dialog.component";
import {ToastrService} from "ngx-toastr";
import {
  DeleteProfileDialogComponent
} from "./dialog/deleteProfileDialog/delete-profile-dialog/delete-profile-dialog.component";
import {AuthService} from "../../services/auth.service";

interface Personne {
  username: string;
  email: string;
  photo?: string;
}
interface updateProfile {
  username: string;
  email: string;
  password?: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, TitleCasePipe, DefaultImagePipe, MatExpansionModule, NgForOf, DatePipe, NgIf]
})

export class ProfileComponent implements OnInit{
  getProfileURL = environment.backend_url + '/user/profile';
  getOrdersURL = environment.backend_url + '/orders';
  userUrl = environment.backend_url + '/user';

  person: Personne={username: '', email: ''} ;
  orders: any[] = [];

  @ViewChild(MatAccordion) accordion: MatAccordion= new MatAccordion();

  constructor(private http : HttpClient,private dialog:MatDialog,private toaster: ToastrService,private authService:AuthService) {

  }
  ngOnInit(): void {
    this.http
      .get<Personne>(this.getProfileURL).subscribe((res: any) => {
        this.person = res.data;});

      this.getOrders().subscribe((orders: any) => {
        this.orders = orders.data.orders;

      });


  }

  getOrders(limit: number = 100, skip: number = 0) {
    return this.http
      .get<any>(this.getOrdersURL, {
        params: {limit: limit.toString(), skip: skip.toString()},
      })
     ;
  }


  editProfile() {
    const dialogRef = this.dialog.open(EditProfileDialog, {
      data:  this.person,
      height: '400px',
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result:updateProfile) => {
      console.log('The dialog was closed')
     if(result )
     { this.http.patch<updateProfile>(this.userUrl, {
          username: result.username,
          email: result.email,
       password: result.password,
        }).subscribe(
       {next: (res: any) => {
           this.toaster.success('Profile updated successfully');

         },
          error: (err: any) => {
            this.toaster.error('Error updating profile');
            throw new Error('Error updating profile');

          }}
     );


      }

    });
  }

  deleteProfile() {
    const dialogRef = this.dialog.open(DeleteProfileDialogComponent, {
      height: '200px',
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result:boolean) => {
      console.log('The dialog was closed')
      if(result )
      { this.http.delete(this.userUrl).subscribe(
        {next: (res: any) => {
            this.toaster.success('Profile deleted successfully');
            this.authService.logout();

          },
          error: (err: any) => {
            this.toaster.error('Error deleting profile');
            throw new Error('Error deleting profile');

          }}
      );


      }

    });
  }
}

