const API_URL = "https://script.google.com/macros/s/AKfycby6WTH2mIj1qBugaGH0Ucb7eyDHGBOCoUqhpUNgQwBwA7PJdHdgJaUXhWEQ7oD-1EJlaA/exec";

fetch(API_URL)
  .then(response => response.json())
  .then(data => console.log("háhááá Válasz a szerverről:", data))
  .catch(error => console.error("nyányányá Hiba történt:", error));

/*async function getFoods() {
    const response = await fetch(`${API_URL}?action=getFoods`);
    const foods = await response.json();
    
    const list = document.getElementById("food-list");
    list.innerHTML = "";
    
    foods.forEach(food => {
        const li = document.createElement("li");
        li.textContent = `${food.name} (${food.category})`;
        list.appendChild(li);
    });
}

getFoods();*/
