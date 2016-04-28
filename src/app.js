export class App {
  configureRouter(config, router) {
    config.title = 'SpiderRock Advisors';
    config.map([
      { 
        route: ['', 'accounts'], 
        name: 'accounts',      
        moduleId: 'accounts',      
        nav: true, title: 'Accounts' 
      },
      { 
        route: ['advisors'], 
        name: 'advisors',      
        moduleId: 'advisors',      
        nav: true, title: 'Advisors' 
      },
      { 
        route: ['strategies'], 
        name: 'strategies',      
        moduleId: 'strategies',      
        nav: true, title: 'Strategies' 
      },
      { 
        route: ['billing'], 
        name: 'billing',      
        moduleId: 'billing',      
        nav: true, title: 'Billing' 
      }
      ]);

    this.router = router;
  }
}
