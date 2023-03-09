import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ResponseComponent } from './components/auth/response/response.component';
import { VerificationComponent } from './components/auth/verification/verification.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'resetPassword', component: ForgotPasswordComponent},
  {path: 'register',  component: RegisterComponent},
  {path: 'verification', component: VerificationComponent},
  {path: 'response', component: ResponseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
