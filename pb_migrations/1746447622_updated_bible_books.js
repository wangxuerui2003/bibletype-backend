/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3816983266")

  // remove field
  collection.fields.removeById("number3340845937")

  // add field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3020209281",
    "hidden": false,
    "id": "relation3340845937",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "chapters",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3816983266")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "number3340845937",
    "max": null,
    "min": null,
    "name": "chapters",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // remove field
  collection.fields.removeById("relation3340845937")

  return app.save(collection)
})
