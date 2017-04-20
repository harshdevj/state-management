import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class ArtistService {

    private _term: string;

    constructor(private http: Http) {
    }

    public set term(value: string) {
        this._term = value;
    }

    public get term(): string {
        return this._term;
    }

    getArtists() {
        return this.http
            .get('https://api.spotify.com/v1/search?q=' + this._term + '&type=artist')
            .map(response => response.json())
    }

}