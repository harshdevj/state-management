import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class TrackService {

    private _term: string;

    constructor(private http: Http) {
    }

    public set term(value: string) {
        this._term = value;
    }

    public get term(): string {
        return this._term;
    }

    getTracks() {
        return this.http
            .get('https://api.spotify.com/v1/search?q=' + this._term + '&type=track')
            .map(response => response.json())
    }

}