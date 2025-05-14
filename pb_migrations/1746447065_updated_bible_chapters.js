/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3020209281")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number833528937",
    "max": null,
    "min": null,
    "name": "verses",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3020209281")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number833528937",
    "max": null,
    "min": null,
    "name": "versus",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
