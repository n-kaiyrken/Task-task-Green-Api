document.getElementById('getSettings').addEventListener('click', function() {
    const idInstance = document.getElementById('idInstance').value;
    const apiToken = document.getElementById('ApiTokenInstance').value;
    fetch(`https://api.green-api.com/waInstance${idInstance}/getSettings/${apiToken}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('responseOutput').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error:', error));
});

document.getElementById('getStateInstance').addEventListener('click', function() {
    const idInstance = document.getElementById('idInstance').value;
    const apiToken = document.getElementById('ApiTokenInstance').value;
    fetch(`https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiToken}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('responseOutput').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error:', error));
});

document.getElementById('sendMessage').addEventListener('click', function() {
    const idInstance = document.getElementById('idInstance').value;
    const apiToken = document.getElementById('ApiTokenInstance').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value;
    const url = `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiToken}`;
    const body = JSON.stringify({
        "chatId": `${phoneNumber}@c.us`,
        "message": message
    });

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: body
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('responseOutput').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('sendFileByUrl').addEventListener('click', function() {
    const idInstance = document.getElementById('idInstance').value;
    const apiToken = document.getElementById('ApiTokenInstance').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const fileUrl = document.getElementById('fileUrl').value;
    const fileName = document.getElementById('fileName').value;
    const url = `https://api.green-api.com/waInstance${idInstance}/sendFileByUrl/${apiToken}`;
    const body = JSON.stringify({
        "chatId": `${phoneNumber}@c.us`,
        "urlFile": fileUrl ,
        "fileName": fileName, 
    });

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: body
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('responseOutput').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Error:', error));
});
