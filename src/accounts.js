import {inject} from 'aurelia-framework';
import {SraData} from './services/sra-data';


@inject(SraData)
export class Accounts {
  heading = 'Account Detail';
  account = [];

  constructor(sraData) {
    this.sraData = sraData;
  }

  activate(params) {
      console.log(params.id);
      this.sraData.getAccount(params.id)
      .then(account => this.account = account);
      return this.account;
  }
  
  editItem(event, row) {
      
  }
  
  saveItem(event, row) {
    
  }
  
  cancelItem(event, row) {
    
  }
  
}
