/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3020209281")

  // remove field
  collection.fields.removeById("number1470056296")

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

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number3452893407",
    "max": null,
    "min": null,
    "name": "chapter_number",
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
    "hidden": false,
    "id": "number1470056296",
    "max": null,
    "min": null,
    "name": "chapter_id",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // remove field
  collection.fields.removeById("relation3420824369")

  // remove field
  collection.fields.removeById("number3452893407")

  return app.save(collection)
})
