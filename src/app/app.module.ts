import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomDropDownComponent } from './components/custom-drop-down/custom-drop-down.component';
import { ClickOutsideDirective } from './components/custom-drop-down/click-outside.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomDropDownComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
