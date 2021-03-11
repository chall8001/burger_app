// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
    
    //create burgers 
    const createBurgerBtn = document.getElementById('burgerSubmitBtn')
    createBurgerBtn.addEventListener("click", function() {
      const newBurger = {
        name: document.getElementById('ca').nodeValue.trim(),
      }
        location.reload();
      });
    });
  
      //update burgers to be devoured
          fetch(`/api/cats/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
  
            // make sure to serialize the JSON body
            body: JSON.stringify(newSleepState),
          }).then((response) => {
            // Check that the response is all good
            // Reload the page so the user can see the new quote
            if (response.ok) {
              console.log(`changed sleep to: ${newSleep}`);
              location.reload('/');
            } else {
              alert('something went wrong!');
            }
          });
          


