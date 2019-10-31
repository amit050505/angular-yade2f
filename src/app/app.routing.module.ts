import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent }  from './home/home.component';
import { ActivityComponent }  from './activity/activity.component';

const appRoutes: Routes = [
  { path: 'my-article', component: HomeComponent },
  { path: 'article',        component: ActivityComponent },
  { path: '',   redirectTo: '/article', pathMatch: 'full' }
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