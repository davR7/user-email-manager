class MethodsUtils {
  copyProperties(source: any, target: any): void {
    if (!(source instanceof Object)) throw new Error("source must be an object");

    if (!(target instanceof Object)) throw new Error("target must be an object");

    for (let prop in target) {
      if (source.hasOwnProperty(prop)) {
        target[prop] = source[prop];
      }
    }
    return target;
  }
  arrayDto(arr: any[], TargetClass: new (...args: any[]) => any) {
    return arr.map(obj => this.copyProperties(obj, new TargetClass()));
  }
}

export default new MethodsUtils();
