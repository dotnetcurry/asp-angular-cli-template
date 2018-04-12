import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VideosService } from '../videos.service';
import { Video } from "../video";

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent {
  public genres: string[];
  public video: Video = {};

  constructor(
    private router: Router,
    private videosSvc: VideosService) {
    this.genres = [
      "",
      "Music",
      "Comedy",
      "Inspirational",
      "Tech",
      "News",
      "Sports"
    ];
  }

  addVideo() {
    this.videosSvc.addVideo(this.video)
      .subscribe(() => {
        this.router.navigateByUrl('/');
      });
  }
}
