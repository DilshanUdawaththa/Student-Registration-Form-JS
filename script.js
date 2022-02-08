var array = [];

function addStudent() {

    const student = [
        {"id": document.getElementById('id').value,
        "email": document.getElementById('email').value,
        "name": document.getElementById('name').value,
        "mobile": document.getElementById('mobile').value,
        "age": document.getElementById('age').value,
        "fee": document.getElementById('fee').value}
    ];
    
    array.push(student);

    alert("Student is added!");

    resetTextBoxes();
}

function displayDetails() {
    let str = '';

    for (i=0; i<array.length; i++) {
        let j = array[i][0];
        str += `Id : ${j.id}<br> Email : ${j.email}<br> Name : ${j.name}<br> Mobile : ${j.mobile}<br> Age : ${j.age}<br> Fee : ${j.fee}<br><br>`;  // adding each element to variable
    }
    
    document.getElementById('show').innerHTML= str; // Display the elements of the array
 
}

function resetTextBoxes() {
    const reset = document.getElementsByClassName('formItems');
    for(let element of reset)
        element.value = '';

    console.log(document.getElementsByClassName('formItems'));
}

function filterFromAge() {
    let str = '';

    for (i=0; i<array.length; i++) {
        let j = array[i][0];
        if (j.age >= document.getElementById('filterAge').value) {
            str += `Id : ${j.id}<br> Email : ${j.email}<br> Name : ${j.name}<br> Mobile : ${j.mobile}<br> Age : ${j.age}<br> Fee : ${j.fee}<br><br>`;  // adding each element to variable
        }
        else {
            str += `You entered ${document.getElementById('filterAge').value} and there are no students greater than or equal to this age `;
        }
    }
    
    document.getElementById('show1').innerHTML= str;
}

function findFromId() {
    let str = '';

    for (i=0; i<array.length; i++) {
        let j = array[i][0];
        if (j.id === document.getElementById('findId').value) {
            str += `Id : ${j.id}<br> Email : ${j.email}<br> Name : ${j.name}<br> Mobile : ${j.mobile}<br> Age : ${j.age}<br> Fee : ${j.fee}<br><br>`;  // adding each element to variable
        }
        else {
            str += `You entered ${document.getElementById('findId').value} and there is no student equal to this ID`;
        }
    }
    
    document.getElementById('show2').innerHTML= str;
}

