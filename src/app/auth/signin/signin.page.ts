import { Component, OnInit } from '@angular/core';
import { SignInModel } from 'src/app/models/signIn-model';
import { AccountService } from 'src/app/services/account.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  signInModel: SignInModel = {
    username_email: '',
    password: ''
  };

  constructor(
    private accountService: AccountService,
    private navCtrl: NavController) { }

  ngOnInit() {

  }

  signin() {
    this.accountService.signIn(this.signInModel)
      .then((x: any) => {
        localStorage.setItem('access_token', x.access_token);
        localStorage.setItem('username_email', this.signInModel.username_email);
        this.navCtrl.navigateRoot('/profile');
      })
      .catch(err => {
        if (err.status === '400') {

        }
        console.log(err);
      });
  }
}
