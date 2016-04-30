import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';


@inject(HttpClient)
export class Accounts {
  heading = 'SRA Accounts';
  accounts = [];

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://localhost:5000/api/')
        .withInterceptor({
            request(request) {
                console.log(`Requesting ${request.method} ${request.url}`);
                return request; // you can return a modified Request, or you can short-circuit the request by returning a Response
            },
            response(response) {
                console.log(`Received ${response.status} ${response.url}`);
                return response; // you can return a modified Response
            }
        });
    });

    this.http = http;
  }

  activate() {
      return this.http.fetch('accounts')
      .then(response => response.json())
      .then(accounts => this.accounts = accounts);
  }
  
  editItem(event, row) {
      
  }
  
  saveItem(event, row) {
    
  }
  
  cancelItem(event, row) {
    
  }
  
}
