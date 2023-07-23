export type Api<D, E> =
  | {
      kind: 'Ok';
      data: D;
    }
  | {
      kind: 'Error';
      code: E;
      message: string;
    };
