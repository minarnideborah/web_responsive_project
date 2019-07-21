import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { YoutubeService } from './youtube.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private unsubscribe$: Subject<any> = new Subject();
  videos: any[];
  videos_2: any[];
  videos_3: any[];
  videos2: any[];
  videos2_a_1: any[];
  videos2_a_2: any[];
  videos2_b_1: any[];
  videos2_b_2: any[];
  videos2_c_1: any[];
  videos2_c_2: any[];
  videos6: any[];
  videos10: any[];
  menu = [
    { name: 'Videos', isLast: false },
    { name: 'People', isLast: false },
    { name: 'Documents', isLast: false },
    { name: 'Events', isLast: false },
    { name: 'Communities', isLast: false },
    { name: 'Favorites', isLast: false },
    { name: 'Channels', isLast: true },
  ];

  constructor(private spinner: NgxSpinnerService, private youTubeService: YoutubeService) { }

  ngOnInit() {
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide()
    }, 3000)
    this.videos = [];
    this.videos2 = [];
    this.videos6 = [];
    this.videos10 = [];

    this.videos_2 = [];
    this.videos_3 = [];
    this.videos2 = [];
    this.videos2_a_1 = [];
    this.videos2_a_2 = [];
    this.videos2_b_1 = [];
    this.videos2_b_2 = [];
    this.videos2_c_1 = [];
    this.videos2_c_2 = [];

    this.youTubeService
      .getVideosForChanel('UC15VpzK4og3NLmCVZQOroFw', 1)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(lista => {
        for (let element of lista["items"]) {
          this.videos.push(element);
        }
      });
    this.youTubeService
      .getVideosForChanel('UCqECaJ8Gagnn7YCbPEzWH6g', 1)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(lista => {
        for (let element of lista["items"]) {
          this.videos_2.push(element);
        }
      });
    this.youTubeService
      .getVideosForChanel('UCsfBhdQQmE0NuljXe-Gl5Dg', 1)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(lista => {
        for (let element of lista["items"]) {
          this.videos_3.push(element);
        }
      });

    this.youTubeService
      .getVideosForChanel('UCKII0Ml9S5wneKbHswmUrIQ', 2)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(lista => {
        for (let element of lista["items"]) {
          this.videos2.push(element);
        }
      });

    this.youTubeService
      .getVideosForChanel('UCzl0OrB3-ehunyotIQvK77A', 2)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(lista => {
        for (let element of lista["items"]) {
          this.videos2_a_1.push(element);
        }
      });

    this.youTubeService
      .getVideosForChanel('UCkCa2NoZlJlfJlMKgZhtKOQ', 2)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(lista => {
        for (let element of lista["items"]) {
          this.videos2_a_2.push(element);
        }
      });

    this.youTubeService
      .getVideosForChanel('UCeXBXzelo7MvLkMr3dAKODQ', 2)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(lista => {
        for (let element of lista["items"]) {
          this.videos2_b_1.push(element);
        }
      });

    this.youTubeService
      .getVideosForChanel('UC0rzsIrAxF4kCsALP6J2EsA', 2)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(lista => {
        for (let element of lista["items"]) {
          this.videos2_b_2.push(element);
        }
      });


    this.youTubeService
      .getVideosForChanel('UC4XFp28z1NfApMtSpxqiCwA', 2)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(lista => {
        for (let element of lista["items"]) {
          this.videos2_c_1.push(element);
        }
      });

    this.youTubeService
      .getVideosForChanel('UCPar4XXTkknIRtj-JSjiddw', 2)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(lista => {
        for (let element of lista["items"]) {
          this.videos2_c_2.push(element);
        }
      });

    this.youTubeService
      .getVideosForChanel('UC15VpzK4og3NLmCVZQOroFw', 6)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(lista => {
        for (let element of lista["items"]) {
          this.videos6.push(element);
        }
      });

    this.youTubeService
      .getVideosForChanel('UC15VpzK4og3NLmCVZQOroFw', 10)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(lista => {
        for (let element of lista["items"]) {
          this.videos10.push(element);
        }
      });
  }
}
