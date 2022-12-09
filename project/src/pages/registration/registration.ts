import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppValidators} from "../../Validators/AppValidators";
import {PageDashboard, PageForgotPassword} from "../Page";

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  isActiveToggleTextPassword: Boolean = true;
  termsAndConditions = 'By Clicking Sign Up, you are agree to our <a href="www.facebook.com">Terms and Conditions and Privacy Policy</a>';
  private form: FormGroup;
  private submitted: boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder) {

    this.buildForm();
  }

  public toggleTextPassword(): void {
    this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword == true) ? false : true;
  }

  public isShowPassword(): boolean {
    return this.isActiveToggleTextPassword === true;
  }

  validatePasswordAction() {
    this.navCtrl.setRoot(PageDashboard);
    this.submitted = true;
    if (!this.form.valid) {
      this.submitted = false;
      return false;
    }


  }

  public getType() {
    return this.isActiveToggleTextPassword ? 'password' : 'text';
  }


  forgotPassword() {
    this.navCtrl.push(PageForgotPassword);
  }

  private buildForm() {

    this.form = this.formBuilder.group({
      password: ['', Validators.compose([Validators.minLength(8), AppValidators.isValidPassword, Validators.maxLength(30), Validators.required])],
      confirm_password: ['', Validators.compose([Validators.minLength(8), AppValidators.isValidPassword, Validators.maxLength(30), Validators.required])],
      username: ['']
    });

  }
}
