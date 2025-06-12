db.produk.bulkWrite([
  {
    insertOne: {
      document: { nama: "Teh Celup", harga: 15000, stok: 100, kategori: "Minuman" }
    }
  },
  {
    updateOne: {
      filter: { nama: "Kopi Bubuk" },
      update: { $set: { harga: 26000 } }
    }
  },
  {
    deleteOne: {
      filter: { nama: "Susu Kental Manis" }
    }
  }
]);