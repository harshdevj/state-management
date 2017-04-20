import { Component, OnDestroy } from '@angular/core';

import { ArtistService } from './artists.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
    template: `
        <h2>Artists</h2>
        Search artist: <input type="text" [(ngModel)]="artistService.term" (ngModelChange)="onArtistChange($event)">
        <table>
            <tr *ngFor="let a of artists">
                <td>{{a.name}}</td>
                <td><img src="{{a.images[2].url}}"></td>
            </tr>
        </table>
    `
})
export class ArtistsComponent implements OnDestroy {

    artists: Array<any> = [];

    constructor(private artistService: ArtistService) {
    }

    onArtistChange(value) {
        this.artistService.getArtists()
            .subscribe(resp => {
                console.info('Response', resp);
                if (resp && resp.artists.total > 0) {
                    this.artists = resp.artists.items;
                }
            }, err => {
                console.warn(err);
            });
    }

    ngOnDestroy() {
        console.info('Artists--------')
    }

}