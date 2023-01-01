import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { PfeTitreFilterPipe } from './Pipes/pfe-titre-filter.pipe';
import { PfeTypeFilterPipe } from './Pipes/pfe-type-filter.pipe';
import { ClickPreventDefaultDirective } from './Directives/click-prevent-default.directive';
import { AddPfeComponent } from './Components/add-pfe/add-pfe.component';
import { PfeListComponent } from './Components/pfe-list/pfe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PfeTitreFilterPipe,
    PfeTypeFilterPipe,
    ClickPreventDefaultDirective,
    AddPfeComponent,
    PfeListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
