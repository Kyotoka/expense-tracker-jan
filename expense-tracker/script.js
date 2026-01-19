let expenses = [];

const input = document.getElementById("expenseInput");
const addBtn = document.getElementById("addBtn");
const totalEl = document.getElementById("total");
const listEl = document.getElementById("expenseList");

addBtn.addEventListener("click", () => {
  const value = input.value.trim();

  // Validation
  if (value === "" || isNaN(value)) {
    alert("Please enter a valid number");
    return;
  }

  const amount = Number(value);
  expenses.push(amount);

  // Add to list
  const li = document.createElement("li");
  li.textContent = `$${amount}`;
  listEl.appendChild(li);

  // Calculate total using reduce
  const total = expenses.reduce((sum, num) => sum + num, 0);
  totalEl.textContent = total;

  input.value = "";
});
