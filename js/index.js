   // Add event listener to the form
   document.getElementById('subForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the selected options
    var subName = document.getElementById('subName').value;
    var bread = document.getElementById('bread').value;
    var toppings = getSelectedCheckboxes('toppings');
    var sauces = getSelectedCheckboxes('sauce');

    // Calculate the subtotal
    var subCost = calculateSubtotal(toppings.length, sauces.length);

    // Display the subtotal
    document.getElementById('subCost').value = subCost;

    // Add the sub to the checkout or perform any desired action with the selected items

    // Reset the form
    document.getElementById('subForm').reset();
  });

  // Helper function to get selected checkboxes
  function getSelectedCheckboxes(checkboxName) {
    var checkboxes = document.getElementsByName(checkboxName);
    var selectedCheckboxes = [];

    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        selectedCheckboxes
  