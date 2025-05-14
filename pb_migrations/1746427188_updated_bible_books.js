/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3816983266")

  // remove field
  collection.fields.removeById("number3340845937")

  return app.save(collection)
})
