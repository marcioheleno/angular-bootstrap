import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  providers: [FeedService]
})

export class FeedComponent implements OnInit {

  tweets;
  likedTweet = undefined;
  currentUsed = 'Márcio Heleno';
  // feedService: FeedService;

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.feedService.getTweets().subscribe(data => {
      this.tweets = data.json().tweets;
    });
  }

  handleLikedTweetFrom(tweet) {
    tweet.like.push(this.currentUsed);
    this.feedService.likeTweet(tweet).subscribe(data => {
      console.log(data.json());
    });
  }
}
