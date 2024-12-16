// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded client scripts)')

JEIEvents.hideItems(event=>{
    event.hide('pizzacraft:onion')
    event.hide('pizzacraft:tomato')
    event.hide('pizzacraft:corn')
    event.hide('/pizzacraft:(.*?)_chopping_board/')
    event.hide('/pizzacraft:(.*?)_knife/')
    event.hide('pizzacraft:oven')
    event.hide('pizzacraft:cucumber_seeds')
    event.hide('pizzacraft:tomato_seeds')
    event.hide('pizzacraft:corn_flour')
    event.hide('pizzacraft:dough')
    event.hide('pizzacraft:tomato_slice')
    event.hide('pizzacraft:onion_slice')
    event.hide('pizzacraft:cucumber_slice')
    event.hide('pizzacraft:cucumber')
    event.hide('pizzacraft:fish_fillet')
    event.hide('pizzacraft:cooked_fish_fillet')
    event.hide('essentials:candle_lilypad')
    event.hide('essentials:copershowium_bricks')
    event.hide('essentials:bronze_bricks')
    event.hide('essentials:tin_bricks')
    event.hide('/fillet_knife/')
    event.hide('/vintagedelight:salt_(.*?)/')
    event.hide('vintagedelight:evaporator')
    event.hide('kubejs:lodestone_compass_display')
    event.hide('lititup:switchgrass')
    event.hide('farmersdelight:tree_bark')
    event.hide('sushigocrafting:cucumber')
    event.hide('sushigocrafting:cucumber_seeds')
    event.hide('sushigocrafting:rice')
    event.hide('sushigocrafting:rice_seeds')
    event.hide('sushigocrafting:raw_tuna')
    event.hide('natprog:flint_saw')
    event.hide('natprog:bronze_saw')
    event.hide('natprog:steel_saw')
    event.hide('/vertical_slab/')
    event.hide('nethersdelight:blackstone_furnace')
    event.hide('davespotioneering:magic_lectern')
    event.hide('salt:salt')
    event.hide('spelunkery:salt_block')
    event.hide('naturalist:cooked_egg')
    event.hide('naturalist:bear_fur')
    event.hide('incubation:fried_egg')
    event.hide('/woodworks:(.*?)_leaves/')
    event.hide('woodworks:sawmill')
    event.hide('/biomemakeover:(.*?)_terracotta_brick/')
    event.hide('/biomemakeover:terracotta_brick/')
    event.hide('natprog:bone_knife')
    event.hide('naturalist:rattle_snake_spawn_egg')
    event.hide('naturalist:bear_spawn_egg')
    event.hide('naturalist:rhino_spawn_egg')
    event.hide('naturalist:elephant_spawn_egg')
    event.hide('naturalist:boar_spawn_egg')
    event.hide('naturalist:dragonfly_spawn_egg')
    event.hide('naturalist:catfish_spawn_egg')
})

JEIEvents.addItems(event=>{
    event.add('/vintagedelight:salt_brick/')
    event.add('vintagedelight:salt_pillar')
    event.add('simply_immersive_bricks:uncooked_clay_brick')
    event.add('sanitydim:garland')
})



JEIEvents.removeRecipes(event=>{
    event.remove('/aquaculture:fish_fillet.(.*?)/')
})

JEIEvents.removeCategories(event=>{
    event.remove('brickfurnace:smoking')
    event.remove('brickfurnace:blasting')
    event.remove('brickfurnace:smelting')
    event.remove('woodworks:sawing')
})