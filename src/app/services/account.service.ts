import { Injectable, EventEmitter } from '@angular/core';
import { MainService } from './main.service';
import { environment } from '../../environments/environment';
import { SignInModel } from '../models/signIn-model';
import { SignUpModel } from '../models/signUp-model';
// import { ForgotPasswordModel } from '../models/forgot-password-model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseUrl = `${environment.baseUrl}`;

  constructor(private mainService: MainService) {
  }

  signIn(signInModel: SignInModel) {
    const queryUrl = `?username_email=${signInModel.username_email}&password=${signInModel.password}`;

    return this.mainService
      .post(`${this.baseUrl}login${queryUrl}`, null)
      .toPromise().then(data => {
        return data;
      });
  }

  signUp(signUpModel: SignUpModel) {
    const queryUrl = `?email_number=${signUpModel.email_number}&username=${signUpModel.username}&password=${signUpModel.password}`;

    return this.mainService
      .post(`${this.baseUrl}register${queryUrl}`, null)
      .toPromise().then(data => {
        return data;
      });
  }

  //   forgotPassword(forgotPasswordModel: ForgotPasswordModel){
  //   return this.mainService
  //   .post(`${this.baseUrl}register?email=`+forgotPasswordModel.email+"||mobileNumber="+forgotPasswordModel.mobileNumber+"&userName="+forgotPasswordModel.userName, null).toPromise().then(data => {
  //   });;
  // }

  // logout(){
  //     return this.mainService
  //     .post(`${this.baseUrl}notification/get` , notificationModel).toPromise();

  //    ,`5`
  // }
}
