/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_393968480")

  // update collection data
  unmarshal({
    "indexes": []
  }, collection)

  // remove field
  collection.fields.removeById("number379761537")

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

  // update field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text4274335913",
    "max": 0,
    "min": 0,
    "name": "text",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_393968480")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_zHxrzlWP0j` ON `bible` (\n  `book_id`,\n  `chapter`,\n  `verse`\n)",
      "CREATE INDEX `idx_6H7uHN9GAM` ON `bible` (\n  `book_id`,\n  `chapter`\n)",
      "CREATE INDEX `idx_1ci2QzfRGN` ON `bible` (`book_id`)"
    ]
  }, collection)

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

  // remove field
  collection.fields.removeById("relation3420824369")

  // update field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text4274335913",
    "max": 0,
    "min": 0,
    "name": "content",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
