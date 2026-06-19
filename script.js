const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	const prices = document.querySelectorAll(".price");

let total = 0;

prices.forEach(price => {
    total += Number(price.textContent);
});

const row = document.createElement("tr");

const cell = document.createElement("td");
cell.id = "ans";
cell.colSpan = 2;
cell.textContent = total;
	cell.class = "prices"

row.appendChild(cell);
	document.querySelector("table").appendChild(row);
};

getSumBtn.addEventListener("click", getSum);

