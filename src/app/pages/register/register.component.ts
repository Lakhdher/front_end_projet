import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router, RouterLink} from "@angular/router";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink]
})
export class RegisterComponent {
  forme: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,
              private router: Router) {


    this.forme = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  register() {
    const val = this.forme.value;

    if (val.email && val.username && val.password) {
      this.authService.register(val.email, val.username, val.password)
        .subscribe(
          () => {
            console.log("User is registered and  logged in");
            this.router.navigateByUrl('/login');
          }
        );
    }

  }
}
