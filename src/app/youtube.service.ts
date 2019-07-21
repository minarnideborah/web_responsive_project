import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  apiKey : string = 'AIzaSyDGZtk_8hzbjn3NJakJqDzKd_GQvaFTc4g';

  constructor(public http: HttpClient) { }

  getVideosForChanel(channel, maxResults): Observable <Object> {
    const url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey 
    + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults;
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }));
  }

  getVideosForChanel2(channel, maxResults): Observable <Object> {
    const url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey 
    + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults;
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }));
  }

  getVideosForChanel6(channel, maxResults): Observable <Object> {
    const url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey 
    + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults;
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }));
  }

}
