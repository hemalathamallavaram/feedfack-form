import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { ThankyouComponent } from './thankyou/thankyou.component';


const routes: Routes = [
    {
      path:'',
      redirectTo:'feedback',
      pathMatch: 'full'
    },
    {
        path:'feedback',
        component:FeedbackComponent
    },
    {
        path:'thankyou',
        component:ThankyouComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
