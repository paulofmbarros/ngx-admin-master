import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbAuthResult, NbAuthService, NbLoginComponent } from '@nebular/auth';
import { NB_AUTH_OPTIONS, NbAuthSocialLink } from '@nebular/auth/auth.options';


@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class LoginComponent{

  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';

  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  submitted: boolean = false;
  socialLinks: NbAuthSocialLink[] = [];
  rememberMe = false;
   constructor(protected service: NbAuthService,
  //   @Inject(NB_AUTH_OPTIONS) protected options = {},
     protected cd: ChangeDetectorRef,
    protected router: Router, private route: ActivatedRoute) { 
    //   this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
    // this.showMessages = this.getConfigValue('forms.login.showMessages');
    // this.strategy = this.getConfigValue('forms.login.strategy');
    // this.socialLinks = this.getConfigValue('forms.login.socialLinks');
    // this.rememberMe = this.getConfigValue('forms.login.rememberMe');

    }


    login(): void {
      this.errors = [];
      this.messages = [];
      this.submitted = true;
      this.router.navigate(['/pages/dashboard'])
      // this.service.authenticate(this.strategy, this.user).subscribe((result: NbAuthResult) => {
      //   this.submitted = false;
  
      //   if (result.isSuccess()) {
      //     this.messages = result.getMessages();
      //   } else {
      //     this.errors = result.getErrors();
      //   }
  
      //   const redirect = result.getRedirect();
      //   if (redirect) {
      //     setTimeout(() => {
      //       return this.router.navigateByUrl(redirect);
      //     }, this.redirectDelay);
      //   }
      //   this.cd.detectChanges();
      // });
    }
  
    getConfigValue(key: string): any {
      //return getDeepFromObject(this.options, key, null);
    }


}
