ServerEvents.recipes(event=>{
    event.remove(
        [
            {
                type:'minecraft:crafting_shaped',id:'/_wood/',output:'#minecraft:logs'
            }
        ]
    )
    event.shaped('kubejs:brick_furnace_sheath',['XXX','YXY','Z Z'],{X:'minecraft:brick',Y:'minecraft:bricks',Z:'quark:sturdy_stone'})
})

LootJS.modifiers(event=>{
    event.addBlockLootModifier('minecraft:sand').replaceLoot('minecraft:sand','4x immersive_weathering:sand_layer_block')
    event.addBlockLootModifier('minecraft:red_sand').replaceLoot('minecraft:sand','4x immersive_weathering:red_sand_layer_block')
})

ServerEvents.tags('item',event=>{
    event.add('minecraft:stripped_logs','upgrade_aquatic:stripped_driftwood_log')
    event.add('forge:stripped_logs','#minecraft:stripped_logs')
})