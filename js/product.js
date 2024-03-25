let endpoint = 'https://crudcrud.com/api/ca9475b8a02949968345497ad6bef7d0/product/';

// menampilkan data di card
fetch(endpoint)
    .then((response) => response.json())
    .then((res) => {
        let datas = res;

        datas.forEach(product_item => {
            document.getElementById("list-produk").innerHTML +=
            `
            <div class="product">
                <img src="${product_item.gambar}" alt="Gambar Produk">
                <h3> ${product_item.nama_produk} </h3>
                <h5> Stok : ${product_item.jumlah} </h5>
                <div class="price"> Rp ${product_item.harga} </div>
                <p> ${product_item.keterangan} </p>
            </div>
            `
        });
    })