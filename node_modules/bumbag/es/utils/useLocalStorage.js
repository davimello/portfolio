import { useCallback } from 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import { useTheme } from './useTheme.js';

function useLocalStorage() {
  var _theme$modes, _theme$modes2;

  var _useTheme = useTheme(),
      theme = _useTheme.theme;

  var isEnabled = (_theme$modes = theme.modes) === null || _theme$modes === void 0 ? void 0 : _theme$modes.enableLocalStorage;
  var localStoragePrefix = (_theme$modes2 = theme.modes) === null || _theme$modes2 === void 0 ? void 0 : _theme$modes2.localStoragePrefix;
  var get = useCallback(function (key) {
    if (!isEnabled) return;

    if (typeof window !== 'undefined') {
      var _window, _window$localStorage, _window$localStorage$;

      return (_window = window) === null || _window === void 0 ? void 0 : (_window$localStorage = _window.localStorage) === null || _window$localStorage === void 0 ? void 0 : (_window$localStorage$ = _window$localStorage.getItem) === null || _window$localStorage$ === void 0 ? void 0 : _window$localStorage$.call(_window$localStorage, localStoragePrefix + "." + key);
    }
  }, [isEnabled, localStoragePrefix]);
  var set = useCallback(function (key, value) {
    if (!isEnabled) return;

    if (typeof window !== 'undefined') {
      var _window2, _window2$localStorage, _window2$localStorage2;

      return (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$localStorage = _window2.localStorage) === null || _window2$localStorage === void 0 ? void 0 : (_window2$localStorage2 = _window2$localStorage.setItem) === null || _window2$localStorage2 === void 0 ? void 0 : _window2$localStorage2.call(_window2$localStorage, localStoragePrefix + "." + key, value);
    }
  }, [isEnabled, localStoragePrefix]);
  return {
    get: get,
    set: set
  };
}

export { useLocalStorage };
