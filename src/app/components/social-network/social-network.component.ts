import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { YoutubeService } from '../../youtube.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.scss']
})
export class SocialNetworkComponent implements OnInit {
  videos: any[];
  private unsubscribe$: Subject<any> = new Subject();

  menu = ['Videos', 'People', 'Documents', 'Events', 'Communities', 'Favorites', 'Channels'];

  constructor(
    private spinner: NgxSpinnerService,
    private youTubeService: YoutubeService
  ) { }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
    this.videos = [];
    this.getVideos();
  }

  getVideos() {
    this.youTubeService.getVideosForChanel('UC15VpzK4og3NLmCVZQOroFw', 1)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(lista => {
        for (let element of lista["items"]) {
          this.videos.push(element);
        }
        console.log('videos', this.videos);
      });
  }

}
