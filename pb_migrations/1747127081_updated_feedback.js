/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2456230977")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number105650625",
    "max": 2,
    "min": 0,
    "name": "category",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2456230977")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number105650625",
    "max": null,
    "min": null,
    "name": "category",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
