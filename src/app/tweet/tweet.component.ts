import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {

  @Input() tweet;
  @Output() likedTweetChild = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  likeTweet(tweet) {
    // console.log(tweet);
    this.likedTweetChild.emit(tweet);
  }
}
