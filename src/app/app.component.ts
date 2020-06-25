import { Component } from '@angular/core';

@Component({
  selector: 'tda-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-text-diff-app';
  ngOnInit() {
    let test={'tenant_id':localStorage.getItem("tenant_id"),'user_id':localStorage.getItem("user_id")};
    localStorage.setItem('test',JSON.stringify(test));
    console.log(localStorage.getItem("tenant_id"));
    console.log(localStorage.getItem("user_id"));
  }
}
// 'id':40,