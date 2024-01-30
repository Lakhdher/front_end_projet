import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {ToastrService} from "ngx-toastr";

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const toaster = inject(ToastrService);
  const authService = inject(AuthService);
  if (!authService.isLoggedIn$.subscribe(
    async (isLoggedIn) => {
      if (!isLoggedIn) {
        toaster.error(
        'Please Login To Continue',
        'Error',
          {
            timeOut: 1000,
          }
      )
        await router.navigate(['/login'],
          {
            queryParams: {
              return: state.url
            }
          }

        );
      }
    }
  )) {

    return false;
  }
  return true;
}
