export default {
  getMap(key) {
    return JSON.parse(window.localStorage.getItem(key) || '[]');
  },
  setMap(key, value) {
    return window.localStorage.setItem(key, JSON.stringify(value))
  }
}
