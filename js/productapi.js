let endpoint = 'https://crudcrud.com/api/ca9475b8a02949968345497ad6bef7d0/product/';

// menampilkan data di tabel
fetch(endpoint)
    .then((response) => response.json())
    .then((res) => {
        let datas = res;

        datas.forEach(data_product => {
            document.getElementById("data_produk").innerHTML +=
            `
            <tr>
                <td> ${data_product.nama_produk} </td>
                <td> ${data_product.jumlah} </td>
                <td> ${data_product.harga} </td>
                <td> ${data_product.keterangan} </td>
                <td>
                    <a href="#" class="btn button-edit" onclick="edit_data('${data_product._id}')"> Edit </a>
                    <a href="#" class="btn button-delete" onclick="delete_data('${data_product._id}')"> Delete </a>
                </td>
            </tr>
            `
        });
    })
    .catch((error) => {
        document.querySelector(".error").innerText = error.message;
        document.querySelector(".error").style.display = "block";
    });

// menambahkan data
function tambah_data(event) {
    event.preventDefault();

    const input_nama_produk = document.getElementById("nama_produk").value;
    const input_jumlah = document.getElementById("jumlah").value;
    const input_harga = document.getElementById("harga").value;
    const input_keterangan = document.getElementById("keterangan").value;
    const input_gambar = document.getElementById("gambar").value;

    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nama_produk: input_nama_produk,
            jumlah: input_jumlah,
            harga: input_harga,
            keterangan : input_keterangan,
            gambar: input_gambar
        })
    })
    .then(response => {
        window.location.reload();
    })
    .catch(error => {
        document.querySelector(".error").innerText = 'Terjadi kesalahan, gagal menambahkan data';
        document.querySelector(".error").style.display = "block";
    });
}

// mengedit data
function edit_data(id_product) {
    document.querySelector(".tambah-data").style.display = "none";
    document.querySelector(".edit-data").style.display = "block";

    fetch(endpoint)
    .then((response) => response.json())
    .then((res) => {
        let datas = res;

        const product = datas.find(data => data._id === id_product);
        document.getElementById("id_produk").value = product._id;
        document.getElementById("edit_nama_produk").value = product.nama_produk;
        document.getElementById("edit_jumlah").value = product.jumlah;
        document.getElementById("edit_harga").value = product.harga;
        document.getElementById("edit_keterangan").value = product.keterangan;
    })
    .catch((error) => {
        console.log('Terjadi kesalahan:', error.message);
    });
}

// mengupdate data
function update_data(event) {
    event.preventDefault();

    const input_nama_produk = document.getElementById("edit_nama_produk").value;
    const input_jumlah = document.getElementById("edit_jumlah").value;
    const input_harga = document.getElementById("edit_harga").value;
    const input_keterangan = document.getElementById("edit_keterangan").value;
    const input_id_produk = document.getElementById("id_produk").value;

    fetch(`${endpoint}${input_id_produk}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nama_produk: input_nama_produk,
            jumlah: input_jumlah,
            harga: input_harga,
            keterangan: input_keterangan,
        })
    })
    .then(response => {
        window.location.reload();
    })
    .catch(error => {
        document.querySelector(".error").innerText = 'Terjadi kesalahan, gagal mengupdate data';
        document.querySelector(".error").style.display = "block";
    });
}

// menghapus data
function delete_data(id_product) {
    fetch(`${endpoint}${id_product}`, {
        method: 'DELETE',
    })
    .then(response => {
        window.location.reload();
    })
    .catch(error => {
        document.querySelector(".error").innerText = 'Terjadi kesalahan, gagal menghapus data';
        document.querySelector(".error").style.display = "block";
    });
}