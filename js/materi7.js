document.getElementById('array').onclick = function() {
    let cars1 = ['Honda', 'Toyota', 'Suzuki'];
    let cars2 = new Array('Honda', 'Toyota', 'Suzuki');

    document.writeln(cars1)
    document.writeln('<br>')
    document.writeln(cars2)
}

document.getElementById('tampil-object').onclick = function() {
    let cars1 = {
        name : 'John',
        age : 30,
        city : 'New York',
    };

    alert('[' + cars1.name + ', ' + cars1.age  + ', ' + cars1.city + ']');
}

document.getElementById('edit-object').onclick = function() {
    let cars1 = {
        name : 'John',
        age : 30,
        city : 'New York',
    };

    let nama = prompt('Nama (Cancel jika tidak ingin diubah) ?')
    let umur = prompt('Umur (Cancel jika tidak ingin diubah) ?')
    let kota = prompt('Kota (Cancel jika tidak ingin diubah) ?')

    if(nama) {
        cars1.name = nama
        alert('[' + cars1.name + ', ' + cars1.age  + ', ' + cars1.city + ']');
    }else if(umur) {
        cars1.age = umur
        alert('[' + cars1.name + ', ' + cars1.age  + ', ' + cars1.city + ']');
    }else if(kota) {
        cars1.city = kota
        alert('[' + cars1.name + ', ' + cars1.age  + ', ' + cars1.city + ']');
    }
}

document.getElementById('hapus-object').onclick = function() {
    let cars1 = {
        name : 'John',
        age : 30,
        city : 'New York',
    };

    let nama = confirm('Nama ingin dihapus ?')
    let umur = confirm('Umur ingin dihapus ?')
    let kota = confirm('Kota ingin dihapus ?')

    if(nama) {
        delete cars1.name
        alert('[' + cars1.name + ', ' + cars1.age  + ', ' + cars1.city + ']');
    }else if(umur) {
        delete cars1.age
        alert('[' + cars1.name + ', ' + cars1.age  + ', ' + cars1.city + ']');
    }else if(kota) {
        delete cars1.city
        alert('[' + cars1.name + ', ' + cars1.age  + ', ' + cars1.city + ']');
    }
}

document.getElementById('void').onclick = function() {
    function sapa(nama) {
        alert('Hello ' + nama + '!')
    }
    sapa('Aan')
}

document.getElementById('return').onclick = function() {
    function hitung(a, b) {
        return alert(a + b)
    }
    hitung(1, 3)
}

let dom = document.getElementById('dom')
    dom.innerHTML = 'Halo Selamat Datang'
    dom.setAttribute('class', 'dom')
    dom.style.fontSize = '20px'
    dom.style.color = 'white'

document.getElementById('event-handler1').addEventListener('click', function() {
    alert('Tombol telah diklik')
})

document.getElementById('event-handler2').onclick = function() {
    alert('Tombol telah diklik')
}
