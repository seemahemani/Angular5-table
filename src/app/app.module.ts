import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatTableModule, MatToolbarModule,
  MatButtonModule, MatListModule
} from '@angular/material';
import { MatSortModule } from '@angular/material/sort';

import { HomeComponent } from './home/home.component';
import { HttpserviceService } from './httpservice.service';
import { TableListComponent } from './table-list/table-list.component';
import { CapitalizePipe } from './capitalize.pipe';
import { InfoComponent } from './info/info.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableListComponent,
    CapitalizePipe,
    InfoComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule, MatListModule

  ],
  providers: [HttpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
