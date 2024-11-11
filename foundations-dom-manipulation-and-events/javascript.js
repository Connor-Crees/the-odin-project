const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// 1
const red_p = document.createElement("p");
red_p.textContent = "Hey I'm red!";
red_p.style.color = "Red";
container.appendChild(red_p);

// 2
const blue_h3 = document.createElement("h3");
blue_h3.textContent = "I'm a blue h3";
blue_h3.style.color = "Blue";
container.appendChild(blue_h3);

// 3
const blackPink_div = document.createElement("div");
blackPink_div.style.borderStyle = "solid";
blackPink_div.style.borderColor = "Black";
blackPink_div.style.background = "Pink";

const bp_h1 = document.createElement("h1");
bp_h1.textContent = "I'm in a div";
blackPink_div.appendChild(bp_h1);

const bp_p = document.createElement("p");
bp_p.textContent = "ME TOO!";
blackPink_div.appendChild(bp_p);

container.appendChild(blackPink_div);

// Button code
function alertFunction() {
    alert("YAY! YOU DID IT!");
}
const btn = document.querySelector("#btn");

// btn.onclick = alertFunction;
btn.addEventListener("click", alertFunction);

// event listener extra info
btn.addEventListener("click", function (e) {
    console.log(e);
});
btn.addEventListener("click", function (e) {
    console.log(e.target);
});
btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
});

// multiple buttons
const buttons = document.querySelectorAll("#container2 button");

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        alert(button.id);
    });
});