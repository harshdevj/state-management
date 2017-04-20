import { ArtistsComponent } from './artists/artists.component';
import { TracksComponent } from './tracks/tracks.component';

import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    { path: 'artists', component: ArtistsComponent },
    { path: 'tracks', component: TracksComponent }
];