document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('admissionForm');
  const table = document.getElementById('studentTable');
  const tbody = table.querySelector('tbody');
  const deleteSelectedBtn = document.getElementById('deleteSelectedBtn');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Get form values
    const name = form.elements['name'].value;
    const dob = form.elements['date'].value;
    const phone = form.elements['ph'].value;
    const email = form.elements['eid'].value;
    const address = form.elements['address'].value;

    const row = document.createElement('tr');    //creating a row with checkbox in submitting records
    row.innerHTML = `
      <td><input type="checkbox" class="row-select"></td>  
      <td>${name}</td>
      <td>${dob}</td>
      <td>${phone}</td>
      <td>${email}</td>
      <td>${address}</td>
    `;

    // Adding the row to the table
    tbody.appendChild(row);
    table.style.display = 'table';
    deleteSelectedBtn.style.display = 'inline-block';

    form.reset();
  });

  // Delete selected rows
  deleteSelectedBtn.addEventListener('click', function() {
    const checkboxes = tbody.querySelectorAll('.row-select:checked');
    checkboxes.forEach(cb => {
      cb.closest('tr').remove();
    });

    // Hide table and button if no rows remain
    if (tbody.querySelectorAll('tr').length === 0) {
      table.style.display = 'none';
      deleteSelectedBtn.style.display = 'none';
    }
  });

 
  const resetButton = form.querySelector('button[type="reset"]');
  if (resetButton) {
    resetButton.addEventListener('click', function() {
    });
  }
});