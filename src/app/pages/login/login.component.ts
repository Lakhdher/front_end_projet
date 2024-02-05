import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class LoginComponent {
  form: FormGroup;
  returnUrl: string | undefined;

  constructor(private fb: FormBuilder, private authService: AuthService,private toaster: ToastrService,
              private router: Router, route: ActivatedRoute) {

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.returnUrl = route.snapshot.queryParams['return'];
  }


  login() {
    const val = this.form.value;

    if (val.email && val.password) {
      this.authService.signIn(val.email, val.password)
        .subscribe(
          {
            next: () => {
              this.router.navigateByUrl(this.returnUrl || '/');
            },
            error: (error) => {
              this.toaster.warning(
                'Invalid email or password. Please try again.',
                'Error',
                {
                  timeOut: 1000,
                },
              );
            }
    }
    )
      ;
    }

  }
}
