import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {TreeTableModule} from 'primeng/treetable';
import {TreeNode} from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeTableModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [MainComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
