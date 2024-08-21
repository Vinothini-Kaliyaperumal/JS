// document.addEventListener('DOMContentLoaded', function(){
//     const form = JSON.parse(localStorage.getItem('form'));

//     if(form){
//         const tablebody = document.getElementById('tablebody');
//         const row = `<tr>
//             <td>${form.student}</td>
//             <td>${form.name}</td>
//             <td>${form.dob}</td>
//             <td>${form.gender}</td>
//             <td>${form.date}</td>
//             <td>${form.email}</td>
//             <td>${form.age}</td>
//         </tr>`;
//         tablebody.innerHTML = row;
//     }
// });






// Runs when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the form data from localStorage
    const form = JSON.parse(localStorage.getItem('form'));

    // If form data exists in localStorage, display it in the table
    if (form) {
        const tablebody = document.getElementById('tablebody');
        const row = `<tr>
            <td>${form.student}</td>
            <td>${form.name}</td>
            <td>${form.dob}</td>
            <td>${form.gender}</td>
            <td>${form.date}</td>
            <td>${form.email}</td>
            <td>${form.age}</td>
        </tr>`;
        tablebody.innerHTML = row;
    }
});

// Runs when the form is submitted
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Gather the form data
    const form = {
        student: document.getElementById('student').value,
        name: document.getElementById('name').value,
        dob: document.getElementById('dob').value,
        gender: document.getElementById('gender').value,
        date: document.getElementById('date').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value
    };

    // Send the form data to the backend via a POST request
    fetch('https://6684d4e456e7503d1ae14dde.mockapi.io/Student', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    })
    .then(response => response.json())  // Parse the JSON response
    .then(data => {
        console.log('Network Response Data:', data);  // Log the network response for debugging

        // Update the table with the response data
        const tablebody = document.getElementById('tablebody');
        const row = `<tr>
            <td>${data.student}</td>
            <td>${data.name}</td>
            <td>${data.dob}</td>
            <td>${data.gender}</td>
            <td>${data.date}</td>
            <td>${data.email}</td>
            <td>${data.age}</td>
        </tr>`;
        tablebody.innerHTML = row;

        // Save the response data to localStorage
        localStorage.setItem('form', JSON.stringify(data));

        // Redirect to the table page (if necessary)
        // window.location.href = 'table.html';  // Uncomment if you want to redirect
    })
    .catch(error => console.error('Error:', error));  // Handle any errors
});
