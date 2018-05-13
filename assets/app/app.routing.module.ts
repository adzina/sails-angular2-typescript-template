import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Define the routes
export const routes = [
  
   { //Redirect urls not found at root
       path: '**',
       redirectTo: ''
     }
];


@NgModule({
  imports: [
    //RouterModule.forRoot(appRoutes)
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
