import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxRemoteDesktopModule } from '../../src';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';

import {
  ClipboardModalComponent
} from './components';
import { OverlayContainer, FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { RouterModule } from '@angular/router';
import { FileSizePipe } from './pipes';
import {TestComponent} from '../test.component';
import {routing} from './app.routing';
import {IndexComponent} from '../index.component';
import {LoginComponent} from './login.component';
import {InfoComponent} from './info/info.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ClipboardModalComponent,
    FileSizePipe,
    TestComponent,
    IndexComponent,
    LoginComponent,
    InfoComponent  
  ],
  imports: [
    BrowserModule,
    NgxRemoteDesktopModule,
    HttpModule,
    MatSnackBarModule,
    CodemirrorModule,
    FormsModule,
    RouterModule.forRoot([]),
    NgbModule.forRoot(),
    routing,
    HttpClientModule
  ],
  providers: [{provide: OverlayContainer, useClass: FullscreenOverlayContainer},
  ],
  entryComponents: [
    ClipboardModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
