/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3020209281")

  // remove field
  collection.fields.removeById("relation3420824369")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "number379761537",
    "max": null,
    "min": null,
    "name": "book_id",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3020209281")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3816983266",
    "hidden": false,
    "id": "relation3420824369",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "book",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // remove field
  collection.fields.removeById("number379761537")

  return app.save(collection)
})
