import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FeedService {

  // private baseUrl = 'http://localhost:3000/tweets/'; // end do jason server
  baseUrl = 'http://localhost:3000/api/tweet';
  constructor(private http: Http) { }

  getTweets(): Observable<Response> {
    return this.http.get(this.baseUrl);
  }

  likeTweet(tweet) {
    return this.http.put(`${this.baseUrl}/${tweet.id}`, tweet);
  }

}
