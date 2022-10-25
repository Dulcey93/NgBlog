import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './components/posts/post/post.component';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';

const routes: Routes = [{path: '', redirectTo: '/home', pathMatch: 'full'}, 
{ path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) }, 
{path:'post/:id', component: PostComponent},
{ path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule) },
{ path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule) },
{ path: 'login', loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
