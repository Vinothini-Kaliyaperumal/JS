document.getElementById('studentForm').addEventListener('submit', function(event){
    event.preventDefault();

    const form = {

        student: document.getElementById('student').value,
        name: document.getElementById('name').value,
        dob: document.getElementById('dob').value,
        gender: document.getElementById('gender').value,
        date: document.getElementById('date').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value
    };

    fetch('https://6684d4e456e7503d1ae14dde.mockapi.io/Student',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    })
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('form', JSON.stringify(data));
        window.location.href = 'table.html';
    })
    .catch(error => console.error('Error:' ,error));

});
