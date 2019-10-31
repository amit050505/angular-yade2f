import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent }  from './home/home.component'


const appRoutes: Routes = [
  { path: 'home', component: HomecComponent },
  { path: 'activity', component:  },
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