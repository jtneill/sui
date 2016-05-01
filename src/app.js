export class App {
  configureRouter(config, router) {
    config.title = 'SpiderRock Advisors';
    config.map([
      { 
        route: ['', 'accounts'], 
        name: 'accounts',      
        moduleId: 'accounts-section',      
        nav: true, title: 'Accounts' 
      },
      { 
        route: ['advisors'], 
        name: 'advisors',      
        moduleId: 'advisors',      
        nav: true, title: 'Advisors' 
      }
      ]);

    this.router = router;
  }
}
