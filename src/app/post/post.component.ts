import { Component, OnInit } from "@angular/core";
import { Post } from "./post";
import { HttpClient } from "@angular/common/http";
import { User } from "./user";
import { ActivatedRoute } from "@angular/router";
import { AlertifyService } from "../services/alertify.service";
@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private alertifyService: AlertifyService
  ) {}
  path: string = "https://jsonplaceholder.typicode.com/";

  posts: Post[];
  users: User[];

  ngOnInit() {
    this.getPosts();
    this.getUsers();
    this.activatedRoute.params.subscribe(params => {
      console.log(params["userid"]);
    });
  }

  getPosts() {
    this.http.get<Post[]>(this.path + "posts").subscribe(response => {
      this.posts = response;
    });
  }
  getUsers() {
    this.http.get<User[]>(this.path + "users").subscribe(response => {
      this.users = response;
    });
  }
  addToFavorites(post) {
    this.alertifyService.success("Added to favs: " + post.title);
  }
}
