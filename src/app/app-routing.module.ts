import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'signup', loadChildren: './auth/signup/signup.module#SignupPageModule' },
  { path: 'signin', loadChildren: './auth/signin/signin.module#SigninPageModule' },
  { path: 'forgot-password', loadChildren: './auth/forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  { path: 'create-dare-aware', loadChildren: './pages/create-dare-aware/create-dare-aware.module#CreateDareAwarePageModule' },
  { path: 'tag-friend', loadChildren: './pages/tag-friend/tag-friend.module#TagFriendPageModule' },
  { path: 'search', loadChildren: './pages/search/search.module#SearchPageModule' },
  { path: 'notification', loadChildren: './pages/notification/notification.module#NotificationPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
