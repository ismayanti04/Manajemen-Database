use projectIsma
switched to db projectIsma
db.createCollection("modelBarang");
{ ok: 1 }
db.modelBarang.insertMany([])
db.modelBarang.insertMany([{ key: "barang001", value: "Kipas Angin" },
  { key: "barang002", value: "Televisi LED 32 Inch" },
  { key: "barang003", value: "Mesin Cuci 2 Tabung" },
  { key: "barang004", value: "Dispenser Galon Bawah" },
  { key: "barang005", value: "Kompor Gas 2 Tungku" }])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('68550bab8f82eb7b9331da24'),
    '1': ObjectId('68550bab8f82eb7b9331da25'),
    '2': ObjectId('68550bab8f82eb7b9331da26'),
    '3': ObjectId('68550bab8f82eb7b9331da27'),
    '4': ObjectId('68550bab8f82eb7b9331da28')
  }
}
db.modelBarang.find();
{
  _id: ObjectId('68550bab8f82eb7b9331da24'),
  key: 'barang001',
  value: 'Kipas Angin'
}
{
  _id: ObjectId('68550bab8f82eb7b9331da25'),
  key: 'barang002',
  value: 'Televisi LED 32 Inch'
}
{
  _id: ObjectId('68550bab8f82eb7b9331da26'),
  key: 'barang003',
  value: 'Mesin Cuci 2 Tabung'
}
{
  _id: ObjectId('68550bab8f82eb7b9331da27'),
  key: 'barang004',
  value: 'Dispenser Galon Bawah'
}
{
  _id: ObjectId('68550bab8f82eb7b9331da28'),
  key: 'barang005',
  value: 'Kompor Gas 2 Tungku'
}

