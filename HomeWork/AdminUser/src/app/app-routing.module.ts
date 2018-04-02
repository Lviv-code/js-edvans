import { HomeComponent } from "./Home/Home.component";
import { User1Component } from "./User1/User1.component";
import { UserComponent } from './user/user.component';
import { Routes, Router, RouterModule } from "@angular/router";
import {NgModule} from '@angular/core';



const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'user', component: UserComponent},
    {path: 'User1/:id', component: User1Component}
]
@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}