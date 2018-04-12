import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Video } from "./video";

@Injectable()
export class VideosService {

  constructor(private httpClient: HttpClient) { }

  getVideos(): Observable<Video[]> {
    return this.httpClient.get<Video[]>('/api/Videos');
  }

  addVideo(video: Video) {
    return this.httpClient.post('/api/Videos',video);
  }

  setWatched(video: Video) {
    video.watched = true;

    return this.httpClient.put(`/api/Videos/${video.id}`, video);
  }
}
