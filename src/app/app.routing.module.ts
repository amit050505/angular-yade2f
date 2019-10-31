import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent }  from './home/home.component';
import { ActivityComponent }  from './activity/activity.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'activity',        component: ActivityComponent },
  { path: '',   redirectTo: '/activity', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}