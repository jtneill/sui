import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';

let baseURL = 'http://localhost:5000/api/';

@inject(HttpClient)
export class SraData {
    
    constructor (http) {
        http.configure(config => {
            config
            .useStandardConfiguration()
            .withBaseUrl(baseURL)
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
    
    getAccounts() {
        return this.http.fetch('accounts')
         .then(response => {
             return response.json();
            });
    }
    
    getAccount(id) {
        return this.http.fetch(`accounts/${id}`)
            .then(response => {
                return response.json();
            });
    }
    
}