import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MesangerComponent } from './mesanger/mesanger.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeadernavComponent } from './headernav/headernav.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MessangerBoxComponent } from './mesanger/messanger-box/messanger-box.component';
import { RightsideComponent } from './mesanger/rightside/rightside.component';
import { MaterialModule } from './material';
@NgModule({
  declarations: [
    AppComponent,
    MesangerComponent,
    SidenavComponent,
    HeadernavComponent,
    MessangerBoxComponent,
    RightsideComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
