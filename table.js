document.addEventListener('DOMContentLoaded', function(){
    const form = JSON.parse(localStorage.getItem('form'));

    if(form){
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