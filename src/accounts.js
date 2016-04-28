import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Users {
  heading = 'SRA Accounts';
  accounts = [];

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://localhost:5000/api/');
    });

    this.http = http;
  }

  activate() {
      return this.http.fetch('accounts')
      .then(response => response.json())
      .then(accounts => this.accounts = accounts);
  }
}
