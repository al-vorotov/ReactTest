export function fakeSleep(ms: number = 3000): Promise<{}> {
  // TODO update
  // tslint:disable-next-line: arrow-parens
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
