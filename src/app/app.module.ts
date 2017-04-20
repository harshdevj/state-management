import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

import { appRoutes } from './app.route';

import { ArtistsComponent } from './artists/artists.component';
import { TracksComponent } from './tracks/tracks.component';

import { ArtistService } from './artists/artists.service';
import { TrackService } from './tracks/tracks.service';

@NgModule({
  declarations: [
    AppComponent, ArtistsComponent, TracksComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true }),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ArtistService, TrackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
