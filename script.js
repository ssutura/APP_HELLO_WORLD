document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    const form = document.getElementById('activity-form');
    const tbody = document.querySelector('#activities tbody');
    if (form && tbody) {
        form.addEventListener('submit', event => {
            event.preventDefault();
            const name = document.getElementById('name').value.trim();
            const area = document.getElementById('area').value.trim();
            const type = document.getElementById('type').value.trim();
            const cost = document.getElementById('cost').value;
            const date = document.getElementById('date').value;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${name}</td>
                <td>${area}</td>
                <td>${type}</td>
                <td>${cost}</td>
                <td>${date}</td>
            `;
            tbody.appendChild(row);
            form.reset();
        });
    }
});
