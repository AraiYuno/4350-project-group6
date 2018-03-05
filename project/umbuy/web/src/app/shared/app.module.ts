import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../business/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatMenuModule, MatCardModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { routingComponents } from './app-routing.module';
import { routing } from './app-routing.module';
import { AdvertisementService } from '../persistence/advertisement.service';
import { UserService } from '../persistence/user.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FilterResultService } from '../shared/filterResult.service';
import { AllResultService } from '../shared/allResult.service'
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { UserProfileComponent } from '../business/user-profile.component';
import { VerifyEmailComponent } from '../business/verify-email.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    UserProfileComponent,
    VerifyEmailComponent,
    routingComponents
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    MatListModule,
    MatTabsModule,
    routing,
  ],
  providers: [UserService, AdvertisementService, FilterResultService, AllResultService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }