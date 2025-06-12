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