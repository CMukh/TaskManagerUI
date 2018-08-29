import {Routes} from '@angular/router'
import { AddComponent } from 'src/app/add/add.component';
import { RouterModule } from '@angular/router';
import { ViewComponent } from 'src/app/view/view.component';
import { UpdateComponent } from 'src/app/update/update.component';
const app_routes:Routes=[
    {path:'',component:ViewComponent},
    {path:'add',component:AddComponent},
    {path:'view',component:ViewComponent},
    {path:'update/:id',component:UpdateComponent}
      ]

export const CONST_ROUTES =RouterModule.forRoot(app_routes);