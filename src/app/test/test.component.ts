import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    
    // throw new Error('Method not implemented.');
    console.log("This is the test component");
    this.getData();
  }
  getData() {
    this.http.get('https://localhost:44367/Supplier/GET')
      .subscribe(
        data => {
          // handle the data
          console.log("Received Data =>",data);
        },
        error => {
          // handle the error
          console.log(" error fetching data =>",error);
        }
      );
  }
}
