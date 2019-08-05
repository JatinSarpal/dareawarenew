import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { NavController } from '@ionic/angular';
import { SignUpModel } from 'src/app/models/signUp-model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signUpModel: SignUpModel = {
    username: '',
    email_number: '',
    password: ''
  };

  constructor(
    private accountService: AccountService,
    private navCtrl: NavController,

  ) { }

  ngOnInit() { }

  signUp() {
    this.accountService.signUp(this.signUpModel)
    .then((response: any) => {
      console.log(response);
    });
    this.navCtrl.navigateForward('/profile');
  }
}
