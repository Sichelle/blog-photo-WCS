function oppenDiapo(src) {
  const idSrc = src.match(/\d+/)[0]
  window.open("gallery2.html?id="+idSrc)
}
