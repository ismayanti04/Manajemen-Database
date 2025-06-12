db.produk.aggregate([
  {
    $group: {
      _id: "$kategori",
      total_produk: { $sum: 1 },
      rata_rata_harga: { $avg: "$harga" }
    }
  }
]);