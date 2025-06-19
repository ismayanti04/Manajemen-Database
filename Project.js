use toko;
db.createCollection("produk");
db.produk.insertOne({
  nama: "Kopi Bubuk",
  harga: 25000,
  stok: 50,
  kategori: "Minuman"
});
db.produk.find();
db.produk.find({nama: "Kopi Bubuk"});
db.produk.updateOne(
  {nama: "Kopi Bubuk"},
  {$set: {stok: 45}}
);

db.produk.deleteOne({nama: "Kopi Bubuk"});

db.produk.find({harga: {$gt: 20000}});
db.produk.find({
  $and: [
    {stok: {$lte: 50}},
    {kategori: "Minuman"}
  ]
});
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
db.produk.aggregate([
  {
    $group: {
      _id: "$kategori",
      total_produk: { $sum: 1 },
      rata_rata_harga: { $avg: "$harga" }
    }
  }
]);
db.createCollection("supplier", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nama", "kontak"],
      properties: {
        nama: {
          bsonType: "string",
          description: "wajib string"
        },
        kontak: {
          bsonType: "string",
          description: "wajib string"
        }
      }
    }
  }
});
