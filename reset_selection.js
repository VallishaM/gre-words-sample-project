function reset_selection() {
  document.getElementById("selected").innerHTML = "None"
  array = ["zero", "one", "two", "three", "four", "five"]
  for (var i = 0; i < 6; i += 1) {
    for (var j = 0; j < 6; j += 1) {
      if (
        document.getElementById(array[i] + array[j]).style.backgroundColor ==
        "green"
      )
        document.getElementById(array[i] + array[j]).style.backgroundColor =
          "gray"
    }
  }
}
