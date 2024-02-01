import Block from "#core/Block/Block";

class Route {
  private _pathname: string;
  private _blockClass: { new (): Block };
  private _block: Block | null;
  private _props: { rootQuery: string };

  constructor(
    pathname: string,
    view: { new (): Block },
    props: { rootQuery: string },
  ) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string): void {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave(): void {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string): boolean {
    return pathname === this._pathname;
  }

  render(): void {
    if (!this._block) {
      this._block = new this._blockClass();
      const root = document.querySelector(this._props.rootQuery) as HTMLElement;
      const content = this._block.getContent();

      if (content !== null) {
        root.appendChild(content);
      }
      return;
    }

    this._block.show();
  }
}

export class Router {
  private static __instance: Router | null = null;
  private routes: Route[];
  private history: History;
  private _currentRoute: Route | null;
  private _rootQuery: string;

  constructor(rootQuery: string) {
    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  static getInstance(rootQuery: string): Router {
    if (!Router.__instance) {
      Router.__instance = new Router(rootQuery);
    }

    return Router.__instance;
  }

  use(pathname: string, block: { new (): Block }): Router {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });

    this.routes.push(route);

    return this;
  }

  start(): void {
    window.onpopstate = () => {
      this._onRoute(window.location.pathname.slice(1));
    };

    this._onRoute(window.location.pathname);
  }

  private _onRoute(pathname: string): void {
    const route = this.getRoute(pathname);

    if (!route) {
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;

    route.render();
  }

  go(pathname: string): void {
    this.history.pushState({}, "", pathname);
    this._onRoute(pathname);
  }

  back(): void {
    this.history.back();
  }

  forward(): void {
    this.history.forward();
  }

  getRoute(pathname: string): Route | undefined {
    const exactRoute = this.routes.find((route) => route.match(pathname));
    return exactRoute;
  }
}
