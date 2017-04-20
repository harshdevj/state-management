import { Component, OnDestroy } from '@angular/core';

import { TrackService } from './tracks.service';
@Component({
    template: `
        <h2>Tracks</h2>
        Search track: <input type="text" [(ngModel)]="trackService.term">
    `
})
export class TracksComponent implements OnDestroy {

    constructor(private trackService: TrackService) {
    }

    ngOnDestroy() {
        console.info('Tracks--------')
    }

}