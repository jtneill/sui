import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {SraData} from './services/sra-data';


@inject(SraData, Router)
export class AccountsList {
  heading = 'SRA Accounts';
  accounts = [];

  constructor(sraData, router) {
    this.router = router;
    this.sraData = sraData;
  }

  activate() {
    this.sraData.getAccounts().then(accounts => 
      this.accounts = accounts);
    return this.accounts;
  }
  
  select(id) {
      this.router.navigate(`accounts/${id}`)
  }
  
  editItem(event, row) {
      
  }
  
  saveItem(event, row) {
    
  }
  
  cancelItem(event, row) {
    
  }
  
}
