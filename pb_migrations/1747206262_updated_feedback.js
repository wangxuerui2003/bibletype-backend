/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2456230977")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_ihLWoKTJa3` ON `feedback` (`likes`)",
      "CREATE INDEX `idx_hasuK0EsU8` ON `feedback` (`likedBy`)"
    ]
  }, collection)

  // add field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation3100860915",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "likedBy",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2456230977")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_ihLWoKTJa3` ON `feedback` (`likes`)"
    ]
  }, collection)

  // remove field
  collection.fields.removeById("relation3100860915")

  return app.save(collection)
})
