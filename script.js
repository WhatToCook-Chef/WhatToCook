const API_URL = "https://script.google.com/macros/s/AKfycbze92xbC6gv822hdFa63RuhBVhoOH_coOeYFBvpY9rBHYFfVXPQgrDOIYtTSA8V3Vgh/exec";

async function getFoods() {
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

getFoods();
