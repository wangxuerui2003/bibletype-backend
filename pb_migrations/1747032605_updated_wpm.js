/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3185957285")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number2987362494",
    "max": null,
    "min": 0,
    "name": "total_letters",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3185957285")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number2987362494",
    "max": null,
    "min": 0,
    "name": "total_words",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
