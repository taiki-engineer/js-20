const calender = document.querySelector(".calender");
const selectedDateText = document.querySelector("#selected-date");
let selectedDate = "";
let selectedBtn = null;
const input = document.querySelector("#todo-input");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#todo-list");
let memos = [];

for (let i = 0; i < 31; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;

    btn.addEventListener("click", () => {
        selectedDate = btn.textContent;
        console.log("選択：", selectedDate);

        if (selectedBtn) {
            selectedBtn.style.backgroundColor = "";
        }

        btn.style.backgroundColor = "red";
        selectedBtn = btn;

        selectedDateText.textContent = selectedDate;
        render();
    });

    calender.appendChild(btn);

};

addBtn.addEventListener("click", () => {
    if (input.value === "" || selectedDate === "") return;

    memos.push({
        text: input.value,
        date: selectedDate
    });

    input.value = "";
    render();
    
});

function render() {
    list.innerHTML = "";

    const filtered = memos.filter(m => m.date == selectedDate);
    filtered.forEach(memo => {
        const li = document.createElement("li")
        li.textContent = memo.text;
        list.appendChild(li);
    })
}

