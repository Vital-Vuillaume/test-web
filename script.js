const baseURL = "http://localhost:3000/vital/api/items";
let items = [];

// --- Affichage ---
function renderItems() {
  const tbody = document.getElementById("itemsTable");
  tbody.innerHTML = "";
  items.forEach(item => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.id}</td>
      <td><input value="${item.name}" onchange="updateItem(${item.id}, this.value)"></td>
      <td><button onclick="deleteItem(${item.id})">Supprimer</button></td>
    `;
    tbody.appendChild(tr);
  });
}

// --- CREATE ---
async function createItem() {
  const name = document.getElementById("newItem").value.trim();
  if (!name) return alert("Entrez un nom");

  try {
    const res = await fetch(baseURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name })
    });
    const newItem = await res.json();
    items.push(newItem);
    renderItems();
    document.getElementById("newItem").value = "";
  } catch (err) {
    console.error(err);
  }
}

// --- UPDATE ---
async function updateItem(id, name) {
  try {
    const res = await fetch(`${baseURL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name })
    });
    const updated = await res.json();
    const index = items.findIndex(i => i.id === id);
    if (index > -1) items[index] = updated;
  } catch (err) {
    console.error(err);
  }
}

// --- DELETE ---
async function deleteItem(id) {
  try {
    await fetch(`${baseURL}/${id}`, { method: "DELETE" });
    items = items.filter(i => i.id !== id);
    renderItems();
  } catch (err) {
    console.error(err);
  }
}

// --- READ au chargement ---
async function loadItems() {
  try {
    const res = await fetch(baseURL);
    items = await res.json();
    renderItems();
  } catch (err) {
    console.error(err);
  }
}

loadItems();