function get(obj, path, fallback, index) {
  var _path$split, _path, _path$split2;

  //@ts-ignore
  path = (_path$split = (_path = path) === null || _path === void 0 ? void 0 : (_path$split2 = _path.split) === null || _path$split2 === void 0 ? void 0 : _path$split2.call(_path, '.')) !== null && _path$split !== void 0 ? _path$split : [path];

  for (index = 0; index < path.length; index++) {
    obj = obj ? obj[path[index]] : undefined;
  }

  return obj === undefined ? fallback : obj;
}

export { get };
