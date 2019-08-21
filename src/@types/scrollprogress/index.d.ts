/// <reference types="node" />

declare class ScrollProgress<T> {
  constructor(handleUpdate: (x: number, y: number) => void);
  destroy(): void;
}

declare module 'scrollprogress' {
  export = ScrollProgress;
}
