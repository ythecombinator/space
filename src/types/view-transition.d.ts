interface ViewTransition {
  finished: Promise<void>;
  ready: Promise<void>;
  updateCallbackDone: Promise<void>;
  skipTransition(): void;
}

type ViewTransitionUpdate = () => void | Promise<void>;

type ViewTransitionOptions = {
  update: ViewTransitionUpdate;
  types?: string[];
};

interface Document {
  startViewTransition(callback: ViewTransitionUpdate): ViewTransition;
  startViewTransition(options: ViewTransitionOptions): ViewTransition;
}

interface CSSStyleDeclaration {
  viewTransitionName: string;
  viewTransitionClass: string;
}
