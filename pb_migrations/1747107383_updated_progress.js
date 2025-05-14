/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1649388127")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_XLEsS7sx4t` ON `user_progress` (`user`)"
    ],
    "name": "user_progress"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1649388127")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_XLEsS7sx4t` ON `progress` (`user`)"
    ],
    "name": "progress"
  }, collection)

  return app.save(collection)
})
