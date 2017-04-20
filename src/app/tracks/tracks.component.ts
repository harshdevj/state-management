import { Component, OnDestroy } from '@angular/core';

import { TrackService } from './tracks.service';
@Component({
    template: `
        <h2>Tracks</h2>
        Search track: <input type="text" [(ngModel)]="trackService.term" (ngModelChange)="onTrackChange($event)">
        <table>
            <tr *ngFor="let a of tracks">
                <td>{{a.name}}</td>
                <td *ngIf="a.album.images[2]"><img src="{{a.album.images[2].url}}"></td>
            </tr>
        </table>
    `
})
export class TracksComponent implements OnDestroy {

    tracks: Array<any> = [];

    constructor(private trackService: TrackService) {
    }

    onTrackChange(value) {
        if (value) {
            this.trackService.getTracks()
                .subscribe(resp => {
                    if (resp && resp.tracks.total > 0) {
                        this.tracks = resp.tracks.items;
                    }
                }, err => {
                    console.warn(err);
                });
        } else {
            this.tracks = [];
        }
    }

    ngOnDestroy() {
        console.info('Tracks--------')
    }

}