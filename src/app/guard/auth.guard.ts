import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const accessToken = JSON.parse(localStorage.getItem('accessToken') || '{}');

  if (!accessToken || accessToken?.user?.id !== 1) {
    alert('Ban khong co quyen truy cap');
    router.navigate(['/sign-in']);
    return false;
  }

  return true;
};
