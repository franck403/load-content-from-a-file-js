function url() {
  function load(url,id_to_place_content){
    const id = id_to_place_content
    fetch(url)
      .then((response) => response.text())
      .then((data) => document.getElementById(id).innerHTML = data);
  }
}
console.log("[info] ploader is started. command are url.load(url,id where content is place) ")