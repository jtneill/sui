import {inject} from 'aurelia-framework';
import {SraData} from './services/sra-data';

@inject(SraData)
export class Advisors {
  heading = 'Advisors';
  advisors = [];

  constructor(sraData) {
    this.sraData = sraData;
  }

  activate() {
      return this.sraData.getAdvisors()
      .then(advisors => this.advisors = advisors);
  }
}
