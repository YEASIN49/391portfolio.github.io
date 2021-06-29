const form = document.getElementById("convert-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const sample = document.getElementById("sampleValue").value;
  console.log(sample);
  const convertTo = document.getElementById("unitSelector").value;
  console.log(convertTo);
  const result =
	 convertTo == "toKg"
		? sample * 0.4536 + " Kg"
		: sample * 2.2046 + " lb";
  console.log(result);
  document.getElementById("convertedResult").innerHTML = result;
});
// console.log(d);

//   #############################
let valueSet;
//   let arr = [];
const seriesDataBtn = document.getElementById("numberSeries-btn");
seriesDataBtn.addEventListener("click", (event) => {
  console.log("Running inside");
  //  console.log(event.target.value);
  const seriesData = document.getElementById("numberSeries").value;
  console.log(seriesData);
  const arr = seriesData.split(",");
  console.log(arr);
  //  console.log(typeof arr);
  const max = Math.max(...arr);
  console.log(max);
  document.getElementById("out-max").innerHTML = max;
  const min = Math.min(...arr);
  console.log(min);
  document.getElementById("out-min").innerHTML = min;
  //  let total = 0;
  const total = arr.reduce((accumulator, currentValue) => {
	 // total = parseInt(accumulator);
	 return parseInt(accumulator) + parseInt(currentValue);
  });
  document.getElementById("out-sum").innerHTML = total;
  const avg = total / arr.length;
  document.getElementById("out-avg").innerHTML = avg;
  // total = parseInt(accumulator);
  // console.log(parseInt(accumulator) + "ac");
  // parseInt(accumulator + currentValue);
  //  });
  console.log(total);
  console.log("avg");
  console.log(avg);
  const arrReverse = arr.reverse();
  document.getElementById("out-rev").innerHTML = arrReverse;

  //  valueSet = event.target.value;
  //  if (valueSet.slice(-1) == ",") {
  //    arr.push(valueSet.slice(0, -1));
  //    console.log("below arr");
  //    console.log(arr);
  //    event.target.value = null;
  //  }
  //  const max = Math.max(...arr);
  //  console.log("below max");
  //  console.log(max);

  //  console.log("after Pushing : " + tempArray);
});
//   console.log("sd" + seriesData);

function clear() {
  document.getElementById("text").value = " ";
}

function capitalize() {
  var textArea = document.getElementById("text").value;
  var arrayOfLines = textArea.split("\n");
  if (!hasLowerCase(textArea)) {
	 document.getElementById("text").value = textArea.toLowerCase();
  }

  if (hasLowerCase(textArea)) {
	 document.getElementById("text").value = textArea.toUpperCase();
  }
}
function hasLowerCase(str) {
  return /[a-z]/.test(str);
}

function sortout() {
  var textarea = document.getElementById("text");
  textarea.value = textarea.value.split("\n").sort().join("\n");
  document.querySelector("text").value = textarea.value;
}

function rev() {
  var reverse = document.getElementById("text");
  reverse.value = reverse.value.split("\n").reverse().join("\n");
  document.querySelector("text").value = reverse.value;
}

function blankRmv() {
  var output = document.getElementById("text").value;
  output = output.replace(/\s+$/gm, "");
  document.getElementById("text").value = output;
}

function qtext(x) {
  var text = document.getElementById("quote");
  text.style.color = x.value;
}

function addNo() {
  var str = document.getElementById("text").value;
  var arr = str.split("\n");

  for (var i = 0; i < arr.length; i++) {
	 arr[i] = Math.random() + arr[i];
  }
  var stuff = arr.join("\n");
  document.getElementById("text").value = stuff;
}

// function shuff() {
//   var shuff = document.getElementById("text");
//   const val = shuff.value.split("\n").shuffle().join("\n");
//   document.querySelector("text").value = val;
// }

const a = [
  "Any man who must say, 'I am the king,' is no true king.",
  "Storms come and go, the big fish eat the little fish, and I keep on paddling.",
  "Revenge is a dish best served cold",
  "There is a saying, 'Yesterday is history. Tomorrow is a mystery, but today is a gift! That is why it is called the present",
];
const quote = document.getElementById("quote");
function b() {
  const c = Math.floor(Math.random() * 3);
  return a[c];
}
quote.innerText = b();
document
  .getElementById("maroon")
  .addEventListener("click", function () {
	 document.getElementById("quote-box").style.backgroundColor =
		"maroon";
	 document.getElementById("quote-box").style.color = "aliceblue";
  });
document
  .getElementById("lightgreen")
  .addEventListener("click", function () {
	 document.getElementById("quote-box").style.backgroundColor =
		"lightgreen";
	 document.getElementById("quote-box").style.color = "black";
  });
document
  .getElementById("darkblue")
  .addEventListener("click", function () {
	 document.getElementById("quote-box").style.backgroundColor =
		"darkblue";
	 document.getElementById("quote-box").style.color = "aliceblue";
  });
document
  .getElementById("orange")
  .addEventListener("click", function () {
	 document.getElementById("quote-box").style.backgroundColor =
		"orange";
	 document.getElementById("quote-box").style.color = "black";
  });

onload = function () {
  randomQuote();
};