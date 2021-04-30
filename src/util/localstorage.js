export var localstorage = {
  set: (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value))
  },
  get: (key) => {
    return JSON.parse(window.localStorage.getItem(key));
  },
  checkIfExists(key, {id}) {
    const allPost = this.get.call(key);
    const indexPost = allPost.findIndex(post => post.id === id);

    const newAllPost = this.allPost.filter((post, index) => index !== indexPost)
    console.log(newAllPost);
  }
}