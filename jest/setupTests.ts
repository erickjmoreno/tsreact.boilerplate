// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import 'jest-extended';
import 'jest-localstorage-mock';

// jest.mock('react-i18next', () => ({
//   ...(jest.requireActual('react-i18next') as Record<string, unknown>),
//   useTranslation: () => ({
//     t: (t: string) => t,
//   }),
// }));

Object.defineProperty(navigator, 'language', {
  get: () => 'es-MX',
});

const timezoneMock = (zone: string) => {
  const DateTimeFormat = Intl.DateTimeFormat;
  jest
    .spyOn(global.Intl, 'DateTimeFormat')
    .mockImplementation(
      (locale, options) => new DateTimeFormat(locale, { ...options, timeZone: zone }),
    );
};

timezoneMock('America/Mexico_City');

console.warn = jest.fn();
console.error = jest.fn();
global.window = Object.create(window);

Object.defineProperty(window, 'location', {
  value: {
    href: '',
    replace: jest.fn(),
  },
});

class IntersectionObserver {
  constructor() {}

  disconnect() {
    return null;
  }

  observe() {
    return null;
  }

  takeRecords() {
    return null;
  }

  unobserve() {
    return null;
  }
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
