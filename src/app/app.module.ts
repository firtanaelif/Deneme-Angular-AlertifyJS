import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomerComponent } from "./customer/customer.component";
import { NavComponent } from "./nav/nav.component";
import { PostComponent } from "./post/post.component";
import { AlertifyService } from './services/alertify.service';

const routes: Routes = [
  { path: "posts", component: PostComponent },
  { path: "", redirectTo: "posts",pathMatch:"full" },
  { path: "customer", component: CustomerComponent },
  { path: "posts/:userid", component: PostComponent },

];
@NgModule({
  declarations: [AppComponent, CustomerComponent, NavComponent, PostComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
