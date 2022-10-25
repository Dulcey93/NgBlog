import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PostService } from '../post.service';
import { PostI } from 'src/app/shared/models/post.interface';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public post:{
    id: string;
    titlePost: string;
    contentPost: string;
    imagePost: string;
  }={
    id:'1',
    titlePost: 'Post One',
    contentPost: "Hola mundo",
    imagePost: "https://picsum.photos/id/237/200/300"
  }
  public post$!: Observable<PostI>;

  constructor(private route: ActivatedRoute, private postSvc: PostService) { }

  ngOnInit(): void {
    const idPost = this.route.snapshot.params['id'];
    this.post$ = this.postSvc.getOnePost(idPost);
  }

}
