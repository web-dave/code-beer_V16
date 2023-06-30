import {
  Routes,
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanDeactivateFn,
} from '@angular/router';
import { WassimComponent } from './wassim/wassim.component';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MelanieComponent } from './melanie/melanie.component';

const MelanieGuard: CanDeactivateFn<MelanieComponent> = (
  component: MelanieComponent,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
) => true;

export const routes: Routes = [
  {
    path: ':drink',
    component: WassimComponent,
    canDeactivate: [MelanieGuard],
  },
];
