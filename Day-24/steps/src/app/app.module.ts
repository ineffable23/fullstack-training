import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BatmanComponent } from './batman.component';
import { SupermanComponent } from './superman.component';
import { AquamanComponent } from './aquaman.component';
import { FlashComponent } from './flash.component';
import { WonderwomanComponent } from './wonderwoman.component';
import { CyborgComponent } from './cyborg.component';
import { NotfoundComponent } from './notfound.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    BatmanComponent,
    SupermanComponent,
    AquamanComponent,
    FlashComponent,
    WonderwomanComponent,
    CyborgComponent,
    NotfoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "batman", component: BatmanComponent },
      { path: "batman/:qty", component: BatmanComponent },
      { path: "superman", component: SupermanComponent },
      { path: "flash", component: FlashComponent },
      { path: "wonderwoman", component: WonderwomanComponent },
      { path: "cyborg", component: CyborgComponent },
      { path: "aquaman", component: AquamanComponent },
      // { path: "ironmanman", redirectTo: "flash", pathMatch:"prefix" },
      { path: "**", component: NotfoundComponent } // ** is the default route. Keep this always in the end, never in-between as it is used to catch the error if any component is not found.
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// { useHash : true }