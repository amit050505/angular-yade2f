import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomecComponent }  from './homec/homec.component'
import { ActivitycComponent }  from './activityc/activityc.component'



const appRoutes: Routes = [
  { path: 'home', component: HomecComponent },
  { path: 'activity', component: ActivitycComponent },
 
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