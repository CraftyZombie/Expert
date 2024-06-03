// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.recipes(event=>{
    console.log('Hello, World! (Loaded custom recipes.)')
    event.shaped('sanitydim:garland',['FF','FF'],{F:'kubejs:garland_fragment'})
    event.shapeless('kubejs:garland_fragment',['2x #minecraft:small_flowers'])
    event.remove('minecraft:chest')
    event.shaped('minecraft:chest',['AAA','ABA','AAA'],{A:'#minecraft:planks',B:'minecraft:iron_ingot'})
    event.shapeless('4x minecraft:string',['#minecraft:wool'])
    event.remove('natprog:crafting/saws/flint_saw')
    event.shaped('natprog:flint_saw',['AAA','BBB','CCC'],{A:'minecraft:stick',B:'minecraft:string',C:'kubejs:flint_tool_piece'})
    event.remove('natprog:crafting/flint_hatchet')
    event.shaped('natprog:flint_hatchet',['BA','C '],{A:'kubejs:flint_tool_piece',B:['minecraft:string','lititup:switchgrass_fiber'],C:'minecraft:stick'})
    event.shaped('natprog:flint_hatchet',['AB',' C'],{A:'kubejs:flint_tool_piece',B:['minecraft:string','lititup:switchgrass_fiber'],C:'minecraft:stick'})
    event.shapeless('kubejs:flint_tool_piece',['3x minecraft:flint'])
    event.shaped('minecraft:flint',['AA','A '],{A:'kubejs:flint_shard'})
    event.shaped('kubejs:pillowcase',['AB','AA'],{A:'#minecraft:wool',B:'minecraft:string'})
    event.shaped('kubejs:stuffed_pillowcase',['AA','BA'],{A:'minecraft:feather',B:'kubejs:pillowcase'})
    event.remove('spelunkery:flint_hammer_and_chisel')
    event.shaped('spelunkery:flint_hammer_and_chisel',[' A ','BCC',' BA'],{A:'kubejs:flint_tool_piece',B:'minecraft:stick',C:'minecraft:string'})
    event.remove('minecraft:furnace')
    event.shaped('minecraft:furnace',['AAA','ABA','CDC'],{A:'minecraft:bricks',B:'#suppsquared:item_shelves',C:'minecraft:cobblestone',D:'minecraft:campfire'})
    event.remove('minecraft:brick')
    event.shapeless('simply_immersive_bricks:uncooked_clay_brick',['2x minecraft:clay_ball','minecraft:packed_mud','manure:manure'])
    event.remove('minecraft:wooden_axe')
    event.remove('minecraft:wooden_shovel')
    event.remove('minecraft:wooden_hoe') 
    event.remove('minecraft:wooden_pickaxe')  
    event.remove('minecraft:stone_axe')
    event.remove('stone_shovel')
    event.remove('stone_pickaxe')
    event.remove('stone_sword')
    event.remove('minecraft:bread')
    event.remove('nethersdelight:blackstone_furnace')
    event.shaped('nethersdelight:blackstone_furnace',['AAA','ABA','CDC'],{A:'minecraft:bricks',B:'#suppsquared:item_shelves',C:'minecraft:blackstone',D:'minecraft:campfire'})
    event.remove('simplemagnets:basicmagnet')
    event.shaped('simplemagnets:basicmagnet',['AAB','AC ','AAD'],{A:'minecraft:iron_ingot',B:'alexscaves:azure_neodymium_ingot',C:'spelunkery:item_magnet',D:'alexscaves:scarlet_neodymium_ingot'})
    event.remove('regions_unexplored:barley_smelting')
    event.remove('regions_unexplored:barley_smoking')
    event.remove({type:'smelting',output:'#forge:ingots',not:{output:'#forge:ingots/zinc'}})
    event.remove({output:'create:andesite_alloy',input:'minecraft:andesite'})
    event.custom({type:'immersiveengineering:alloy',input0:{base_ingredient:{tag:'forge:ingots/zinc'},count:2},input1:{base_ingredient:{item:'minecraft:andesite'},count:2},result:{base_ingredient:{item:'create:andesite_alloy'}}})
    event.custom({type:'immersiveengineering:alloy',input0:{base_ingredient:{item:'alexscaves:raw_azure_neodymium'},count:3},input1:{base_ingredient:{item:'minecraft:iron_ingot'},count:3},result:{base_ingredient:{item:'alexscaves:azure_neodymium_ingot'}}})
    event.custom({type:'immersiveengineering:alloy',input0:{base_ingredient:{item:'minecraft:iron_ingot'}},input1:{base_ingredient:{tag:'forge:ingots/lead'}},result:{base_ingredient:{item:'eidolon:pewter_ingot'},count:2}})
    event.remove('eidolon:pewter_blend')
    event.shapeless('2x eidolon:pewter_blend',['#forge:dusts/iron','#forge:dusts/lead'])
    event.replaceInput({output:'usefulslime:slime_boots'},'minecraft:slime_ball','reliquary:slime_pearl')
    event.remove('usefulslime:slime_sling')
    event.shaped('usefulslime:slime_sling',['ABA',' C ',' D '],{A:'reliquary:slime_pearl',B:'minecraft:string',C:'minecraft:slime_block',D:'minecraft:slime_ball'})
    event.remove('botania:petal_apothecary/pure_daisy')
    event.remove('apotheosis:torch')
    event.remove('immersiveengineering:crafting/hammer')
    event.shaped('immersiveengineering:hammer',[' AB',' CA','C  '],{A:'#forge:ingots/lead',B:'minecraft:string',C:'minecraft:stick'})
    event.smelting('kubejs:processed_tin','#forge:raw_materials/tin')
    event.smelting('kubejs:processed_lead','#forge:raw_materials/lead')
    event.smelting('kubejs:processed_copper','minecraft:raw_copper')
    event.smelting('kubejs:processed_iron','minecraft:raw_iron')
    event.remove('cyclic:hopper_fluid')
    event.shaped('cyclic:hopper_fluid',['A A','ABA',' A '],{A:'minecraft:brick',B:'ceramicbucket:ceramic_bucket'})
    event.remove('cyclic:crafting/chest')
    event.remove('hardcore_torches:fire_starter')
    event.shapeless('hardcore_torches:fire_starter',['3x twigs:twig',['minecraft:string','lititup:switchgrass_fiber']])
})
