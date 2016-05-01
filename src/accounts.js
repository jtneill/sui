import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';


@inject(HttpClient)
export class Accounts {
  heading = 'Account Detail';
  account = [];

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

  activate(params) {
      console.log(params.id);
      return this.http.fetch(`accounts/${params.id}`)
      .then(response => response.json())
      .then(account => this.account = account);
  }
  
  editItem(event, row) {
      
  }
  
  saveItem(event, row) {
    
  }
  
  cancelItem(event, row) {
    
  }
  
}
