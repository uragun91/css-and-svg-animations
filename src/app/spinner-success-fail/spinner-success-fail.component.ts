import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-spinner-success-fail",
  templateUrl: "./spinner-success-fail.component.html",
  styleUrls: ["./spinner-success-fail.component.css"]
})
export class SpinnerSuccessFailComponent implements OnInit {
  isReady: false;
  isProgress: false;
  isFail: false;

  constructor() {}

  ngOnInit() {
    
  }
}
