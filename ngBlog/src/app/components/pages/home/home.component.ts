import { Component, OnInit } from '@angular/core';
import { PostService } from '../../posts/post.service';
import { PostI } from 'src/app/shared/models/post.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public posts$!: Observable<PostI[]>;
  
  constructor(private postSvc: PostService) { }

  ngOnInit(): void {
    this.posts$= this.postSvc.getAllPosts();
  }

}
