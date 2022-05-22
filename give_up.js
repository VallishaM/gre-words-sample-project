function give_up() {
  localStorage.setItem("score", 0)
  document.getElementById("score2").innerHTML = 0
  array = ["zero", "one", "two", "three", "four", "five"]
  document.getElementById("ans1").style.display = "inline"
  document.getElementById("ans2").style.display = "inline"
  document.getElementById("ans3").style.display = "inline"
  if (localStorage.getItem("difficulty") == "medium")
    localStorage.setItem("difficulty", "easy")
  if (localStorage.getItem("difficulty") == "hard")
    localStorage.setItem("difficulty", "medium")
  for (var i = 0; i < 6; i += 1) {
    for (var j = 0; j < 6; j += 1) {
      document.getElementById(array[i] + array[j]).style.backgroundColor =
        "black"
    }
  }
  localStorage.setItem("won", false)
}
