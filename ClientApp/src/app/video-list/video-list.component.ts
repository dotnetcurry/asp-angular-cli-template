import { Component, OnInit, Inject } from '@angular/core';

import { VideosService } from '../videos.service';
import { Video } from "../video";
import { windowProvider } from '../window';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  public videos: Video[];

  constructor(private videosService: VideosService,
    @Inject(windowProvider.provide) private window: Window) { }

  ngOnInit() {
    this.videosService.getVideos()
      .subscribe(videos => {
        this.videos = videos;
     });
  }

  watch(video: Video) {
    this.videosService.setWatched(video)
      .subscribe(v => console.log(v));
    this.window.open(video.link, '_blank');
  }

}
