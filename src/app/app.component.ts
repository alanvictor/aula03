import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
  NavigationCancel
} from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading = false;

  constructor(
    titleService: Title,
    router: Router,
    private oAuthService: OAuthService
  ) {
    this.oauthSetup();
    titleService.setTitle('Pet Codes');
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      this.loading = false;
    }
  }

  oauthSetup() {
    this.oAuthService.requireHttps = false;
    this.oAuthService.tokenEndpoint = '/api/oauth/token';
    // this.oAuthService.userinfoEndpoint = '';
    this.oAuthService.clientId = 'frontfront';
    this.oAuthService.scope = 'openid profile email voucher offline_access';
    this.oAuthService.dummyClientSecret = 'frontend';
  }
}
