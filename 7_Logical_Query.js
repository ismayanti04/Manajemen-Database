db.produk.find({
  $and: [
    {stok: {$lte: 50}},
    {kategori: "Minuman"}
  ]
});