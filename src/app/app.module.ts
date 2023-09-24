import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ShortInterceptor } from './services/short.interceptor';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShorUrlComponent } from './components/shor-url/shor-url.component';
import { SpinerComponent } from './components/spiner/spiner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShorUrlComponent,
    SpinerComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ShortInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
