import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { PilotsComponent } from './components/pilots/pilots.component';
import { StarshipDetailsComponent } from './components/starship-details/starship-details.component';
import { PilotDetailsComponent } from './components/pilot-details/pilot-details.component';
import { MyCustomPipe } from './my-custom.pipe';
import { PilotUrlPipe } from './pilote-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StarshipsComponent,
    PilotsComponent,
    StarshipDetailsComponent,
    PilotDetailsComponent,
    MyCustomPipe,
    PilotUrlPipe
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
