import {Component, OnInit, signal} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  status$: Observable<any> | undefined

  constructor(protected authService: AuthService) {
  }

  ngOnInit(): void {
    this.status$ = this.authService.isLoggedIn$;
  }

  logout() {
    this.authService.logout();
  }


}
