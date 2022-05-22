function click_element() {
  const id = click_element.caller.arguments[0].target.id
  if (localStorage.getItem("done") == null) localStorage.setItem("done", 0)
  if (
    document.getElementById(id).style.backgroundColor != "black" &&
    document.getElementById(id).style.backgroundColor != "green"
  ) {
    if (document.getElementById("selected").innerHTML == "None")
      document.getElementById("selected").innerHTML = ""
    document.getElementById(id).style.backgroundColor = "green"
    document.getElementById("selected").innerHTML =
      document.getElementById("selected").innerHTML +
      document.getElementById(id).innerHTML

    flag = false
    if (
      document.getElementById("selected").innerHTML ==
      localStorage.getItem("one").toUpperCase()
    ) {
      document.getElementById("found-word").innerHTML = localStorage
        .getItem("one")
        .toUpperCase()
      flag = true
      localStorage.setItem("done", localStorage.getItem("done") + 1)
      document.getElementById("hint1").style.textDecoration = "line-through"
    } else if (
      document.getElementById("selected").innerHTML ==
      localStorage.getItem("two").toUpperCase()
    ) {
      document.getElementById("found-word").innerHTML = localStorage
        .getItem("two")
        .toUpperCase()
      flag = true
      localStorage.setItem("done", localStorage.getItem("done") + 1)
      document.getElementById("hint2").style.textDecoration = "line-through"
    } else if (
      document.getElementById("selected").innerHTML ==
      localStorage.getItem("three").toUpperCase()
    ) {
      document.getElementById("found-word").innerHTML = localStorage
        .getItem("three")
        .toUpperCase()
      flag = true
      localStorage.setItem("done", localStorage.getItem("done") + 1)

      document.getElementById("hint3").style.textDecoration = "line-through"
    }

    if (flag) {
      document.getElementById("word-done").style.display = "block"
      difficulty = localStorage.getItem("difficulty")
      var score = parseInt(localStorage.getItem("score"))
      if (difficulty == "easy") score += 10
      else if (difficulty == "medium") score += 25
      else if (difficulty == "hard") score += 50
      localStorage.setItem("score", score)
      document.getElementById("score2").innerHTML = score
      document.getElementById("selected").innerHTML = "None"

      array = ["zero", "one", "two", "three", "four", "five"]
      for (var i = 0; i < 6; i += 1) {
        for (var j = 0; j < 6; j += 1) {
          if (
            document.getElementById(array[i] + array[j]).style
              .backgroundColor == "green"
          )
            document.getElementById(array[i] + array[j]).style.backgroundColor =
              "black"
        }
      }
      if (localStorage.getItem("done") == "0111") {
        document.getElementById("level-done").style.display = "block"
        localStorage.setItem("won", true)
        render()
      }
    }
  }
}
