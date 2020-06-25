import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { FooterComponent, HeaderComponent } from './shared';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], {
  useHash: true,
});

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, rootRouting, SharedModule, AuthModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
