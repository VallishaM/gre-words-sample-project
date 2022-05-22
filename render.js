function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len)
  localStorage.setItem("done", 0)
  document.getElementById("b2").style.display = "inline"
  document.getElementById("ans1").style.display = "none"
  document.getElementById("ans2").style.display = "none"
  document.getElementById("ans3").style.display = "none"
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available")
  while (n--) {
    var x = Math.floor(Math.random() * len)
    result[n] = arr[x in taken ? taken[x] : x]
    taken[x] = --len in taken ? taken[len] : len
  }
  return result
}
function render() {
  var difficulty = "easy"

  if (localStorage.getItem("difficulty") == null) {
    localStorage.setItem("difficulty", "easy")
  }
  if (localStorage.getItem("won") == "true") {
    if (localStorage.getItem("difficulty") == "easy") {
      localStorage.setItem("difficulty", "medium")
      difficulty = "medium"
    } else if (localStorage.getItem("difficulty") == "medium") {
      localStorage.setItem("difficulty", "hard")
      difficulty = "hard"
    } else if (localStorage.getItem("difficulty") == "hard") {
      difficulty = "hard"
    }
  } else if (localStorage.getItem("won") != null)
    difficulty = localStorage.getItem("difficulty")
  const words_list = {
    easy: [
      {
        word: "anamoly",
        meaning: "something that is unusual or unexpected",
      },
      {
        word: "abstain",
        meaning: "to restrain oneself for doing or enjoying something",
      },
      {
        word: "homogeneous",
        meaning: "of the same or similar kind",
      },
      {
        word: "volatile",
        meaning: "likely to change rapidly and unpredictably",
      },
      {
        word: "apathy",
        meaning: "lack of interest, enthusiasm, or concern",
      },
      {
        word: "mitigate",
        meaning: "make less severe, serious, or painful",
      },
      {
        word: "advocate",
        meaning: "publicly recommend or support",
      },
      {
        word: "paradox",
        meaning: "a statement that contradicts itself but might be true",
      },
      {
        word: "lethargic",
        meaning: "lacking energy",
      },
      {
        word: "malleable",
        meaning: "easily influenced",
      },
    ],
    medium: [
      {
        word: "acumen",
        meaning: "keen judgment and perception",
      },
      {
        word: "admonish",
        meaning: "scold or to advise firmly",
      },
      {
        word: "affectation",
        meaning:
          "fake or artificial behavior, often meant to impress or conceal the truth",
      },
      {
        word: "amalgamate",
        meaning: "to combine to or mix together",
      },
      {
        word: "ameliorate",
        meaning: "to improve or mitigate a situation",
      },
      {
        word: "analogous",
        meaning: "appropriate for analogy",
      },
      {
        word: "archaic",
        meaning: "old fashioned",
      },
      {
        word: "arduous",
        meaning: "very difficult",
      },
      {
        word: "artless",
        meaning: "austere or self-denying",
      },
      {
        word: "astonishment",
        meaning: "total surprise, shock",
      },
    ],
    hard: [
      {
        word: "capricious",
        meaning: "determined by chance or impulse rather than by necessity",
      },
      {
        word: "prosaic",
        meaning: "lacking wit or imagination",
      },
      {
        word: "prolix",
        meaning: "tediously prolonged or tending to speak or write at length",
      },
      {
        word: "recondite",
        meaning: "difficult",
      },
      {
        word: "brackish",
        meaning: "slightly salty",
      },
      {
        word: "ribald",
        meaning: "humorously vulgar",
      },
      {
        word: "skulk",
        meaning: "lie in wait or behave in a sneaky and secretive manner",
      },
      {
        word: "invective",
        meaning: "abusive language used to express blame or censure",
      },
      {
        word: "minatory",
        meaning: "threatening or foreshadowing evil or tragic developments",
      },
      {
        word: "sordid",
        meaning: "foul and run-down and repulsive",
      },
    ],
  }
  localStorage.setItem("won", false)
  const words_to_consider = getRandom(words_list[difficulty], 3)
  document.getElementById("diff2").innerHTML = difficulty
  document.getElementById("hint1").style.textDecoration = "none"
  document.getElementById("hint2").style.textDecoration = "none"
  document.getElementById("hint3").style.textDecoration = "none"
  document.getElementById("select-wrap").style.display = "block"
  document.getElementById("diff-wrap").style.display = "block"
  document.getElementById("score-wrap").style.display = "block"
  document.getElementById("selected").innerHTML = "None"
  if (localStorage.getItem("score") == null) localStorage.setItem("score", 0)

  document.getElementById("score2").innerHTML = localStorage.getItem("score")
  String.prototype.shuffle = function () {
    var a = this.split(""),
      n = a.length

    for (var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1))
      var tmp = a[i]
      a[i] = a[j]
      a[j] = tmp
    }

    return a.join("")
  }
  function makeid(length) {
    var result = ""
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var charactersLength = characters.length
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }
  words = [
    words_to_consider[0]["word"],
    words_to_consider[1]["word"],
    words_to_consider[2]["word"],
  ]
  hints = [
    words_to_consider[0]["meaning"],
    words_to_consider[1]["meaning"],
    words_to_consider[2]["meaning"],
  ]
  document.getElementById("hint-head").innerHTML = "<b>Hints</b>;<br/>"
  document.getElementById("hint1").innerHTML = "1. " + hints[0] + "<br/>"
  document.getElementById("hint2").innerHTML = "2. " + hints[1] + "<br/>"
  document.getElementById("hint3").innerHTML = "3. " + hints[2] + "<br/><br/>"
  document.getElementById("ans1").innerHTML = words[0]
  document.getElementById("ans2").innerHTML = words[1]
  document.getElementById("ans3").innerHTML = words[2]
  word = ""
  len = 0
  for (i = 0; i < words.length; i++) {
    word += words[i].toUpperCase()
    len += words[i].length
  }
  localStorage.setItem("one", words[0])
  localStorage.setItem("two", words[1])
  localStorage.setItem("three", words[2])
  localStorage.setItem("oneh", hints[0])
  localStorage.setItem("twoh", hints[1])
  localStorage.setItem("threeh", hints[2])
  var map = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
  }
  word = word + makeid(36 - len)
  console.log(word)
  word = word.shuffle()
  console.log(word)
  html = "<table>"
  for (i = 0; i < 6; i++) {
    html += "<tr>"
    for (j = 0; j < 6; j++) {
      html +=
        '<td id="' +
        map[i] +
        map[j] +
        '" onclick="click_element()">' +
        word[6 * i + j] +
        "</td>"
    }
    html += "</tr>"
  }
  document.getElementById("table").innerHTML = html
}
