/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3505953218")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_JNoTWoikQx` ON `best_speed` (`updated`)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3505953218")

  // update collection data
  unmarshal({
    "indexes": []
  }, collection)

  return app.save(collection)
})
