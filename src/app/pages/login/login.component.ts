import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup ;
  returnUrl: string | undefined;

  constructor(private fb:FormBuilder,private authService :AuthService,
              private router: Router,route: ActivatedRoute) {

   this.form = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]]
    });
    this.returnUrl = route.snapshot.queryParams['return'];
  }




  login() {
    const val = this.form.value;

    if (val.email && val.password) {
      this.authService.signIn(val.email, val.password)
        .subscribe(
          () => {
            console.log("User is logged in");
            if (this.returnUrl) {
              this.router.navigate([this.returnUrl]);
            } else {
              this.router.navigateByUrl('/');

            }
          }
        );
    }

  }
}
