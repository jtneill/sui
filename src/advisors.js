import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Advisors {
  heading = 'Advisors';
  advisors = [];

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://localhost:5000/api/');
    });

    this.http = http;
  }

  activate() {
      return this.http.fetch('advisors')
      .then(response => response.json())
      .then(advisors => this.advisors = advisors);
  }
}
