import '@testing-library/jest-dom'
// import 'structured-clone';


// https://medium.com/@Yasirgaji/setting-up-jest-for-next-js-and-chakra-ui-a-practical-battle-tested-guide-1ba5c9ace4b2

// implementation of structuredClone polyfill

if (typeof global.structuredClone !== 'function') {
  global.structuredClone = function structuredClone(value) {
    if (value === null || value === undefined) {
      return value;
    }

    try {
      // For objects and arrays, use JSON methods
      if (typeof value === 'object') {
        return JSON.parse(JSON.stringify(value));
      }

      // For primitive values, return directly
      return value;
    } catch (error) {
      console.warn('structuredClone polyfill failed:', error);

      // Returns a shallow copy as fallback
      return Array.isArray(value) ? [...value] : { ...value };
    }
  };
}