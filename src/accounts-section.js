export class AccountsSection {
  configureRouter(config, router) {
    config.map([
      { route: '',    moduleId: './accounts-list', nav: false, title: '' },
      { route: ':id', moduleId: './accounts',      nav: false, title: '' },
    ]);
  }
}