function out_to_console(json_date) {
    console.log(json_date);
}

function loadData(name_file) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', name_file, false);
    xhr.send();

    if (xhr.status !== 200) {
        alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
    }
    else {
        alert(xhr.responseText);
        let json_date = JSON.parse(xhr.responseText);
        out_to_console(json_date);
    }
}



let but_error = document.getElementById('Error');
but_error.onclick = function() {
    loadData('data1.json');
}

let but_correct = document.getElementById('Correct');
but_correct.onclick = function() {
    loadData('data.json');
}