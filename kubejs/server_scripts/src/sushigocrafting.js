LootJS.modifiers(event=>{
    event.addBlockLootModifier('/(.*?)/').removeLoot('sushigocrafting:rice')
    event.addBlockLootModifier('/(.*?)/').removeLoot('sushigocrafting:rice_seeds')
    event.addBlockLootModifier('/(.*?)/').removeLoot('sushigocrafting:cucumber')
    event.addBlockLootModifier('/(.*?)/').removeLoot('sushigocrafting:cucumber_seeds')
})