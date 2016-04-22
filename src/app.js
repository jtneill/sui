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
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}
