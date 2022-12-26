const form = document.querySelector('#message-form');
        form.addEventListener('submit', function(event) {
          event.preventDefault(); // prevent the form from submitting
      
          const name = form.elements.name.value;
          const email = form.elements.email.value;
          const message = form.elements.message.value;
      
          console.log(name, email, message);
        });
      