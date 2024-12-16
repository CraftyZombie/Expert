//Item Tags for Expert

ServerEvents.tags('item',event=>{
//Tag Merging.
    event.add('expert:stairs','#forge:stairs')
    event.add('expert:stairs','#minecraft:stairs')
    event.add('expert:stairs','/stairs/')
    event.add('expert:slabs','#forge:slabs')
    event.add('expert:slabs','#minecraft:slabs')
    event.add('expert:fences','#minecraft:fences')
    event.add('expert:walls','#minecraft:walls')
    event.add('expert:doors','#minecraft:doors')
    event.add('expert:fences','#forge:fences')
    event.add('expert:walls','#forge:walls')
    event.add('expert:doors','#forge:doors')
    event.add('expert:recycles_to_iron_ingot','#immersive_weathering:clean_iron_smelting')
    event.add('expert:recycles_to_iron_ingot','#immersive_weathering:weathered_iron_smelting')
    event.add('expert:recycles_to_iron_ingot','#immersive_weathering:exposed_iron_smelting')
    event.add('expert:recycles_to_iron_ingot','#immersive_weathering:rusted_iron_smelting')
    event.add('expert:standard_bonemeal','#alexscaves:medium_bone_blocks')
    event.add('expert:standard_bonemeal','call_of_yucutan:elder_bone')
    event.add('expert:standard_bonemeal','aquaculture:fish_bones')
    event.add('expert:standard_bonemeal','minecraft:bone')
    event.add('expert:standard_bonemeal','architects_palette:withered_bone')
    event.add('expert:standard_bonemeal','#twigs:seashells')
    event.add('expert:standard_bonemeal','ecologics:seashell')
//Tag Combining.
    event.add('forge:ores/iron','#spelunkery:iron_ores')
    event.add('forge:ores/coal','#spelunkery:coal_ores')
    event.add('forge:ores/copper','#spelunkery:copper_ores')
    event.add('forge:ores/redstone','#spelunkery:redstone_ores')
    event.add('forge:ores/gold','#spelunkery:gold_ores')
    event.add('forge:ores/emerald','#spelunkery:emerald_ores')
    event.add('forge:ores/diamond','#spelunkery:diamond_ores')
    event.add('forge:ores/lapis','#spelunkery:lapis_ores')
//New Tags
    event.add('expert:cakes','minecraft:cake')
    event.add('expert:cakes','enigmaticlegacy:cosmic_cake')
    event.add('expert:cakes','/neapolitan:(.*?)_cake/')
    event.add('expert:cakes','ends_delight:stuffed_rice_cake')
    event.add('expert:cakes','farmersdelight:cake_slice')
    event.add('expert:cakes','farmersdelight:sweet_berry_cheesecake')
    event.add('expert:cakes','farmersdelight:sweet_berry_cheesecake_slice')
    event.add('expert:pies','/farmersdelight:(.*?)_pie/')
    event.add('expert:pies','minecraft:pumpkin_pie')
    event.add('expert:pies','delightful:salmonberry_pie')
    event.add('expert:pies','endersdelight:chorus_pie')
    event.add('expert:pies','ends_delight:chorus_fruit_pie')
    event.add('expert:pies','upgrade_aquatic:mulberry_pie')
    event.add('expert:pies','/farmersdelight:(.*?)_pie_slice/')
    event.add('expert:pies','minecraft:pumpkin_pie_slice')
    event.add('expert:pies','delightful:salmonberry_pie_slice')
    event.add('expert:pies','endersdelight:chorus_pie_slice')
    event.add('expert:pies','ends_delight:chorus_fruit_pie_slice')
    event.add('expert:pies','ends_delight:chorus_flower_pie')
    event.add('expert:cookies','/cookie/')
    event.add('expert:pastries','#expert:cakes')
    event.add('expert:pastries','#expert:pies')
    event.add('expert:pastries','#expert:cookies')
    event.add('expert:pastries','endersdelight:strange_eclair')
    event.add('expert:pasta_dishes','/pasta/')
    event.remove('expert:pasta_dishes','farmersdelight:raw_pasta')
    event.add('expert:smelting_devices','/furnace/')
    event.add('expert:smelting_devices','smoker')
    event.add('expert:smelting_devices','/oven/')
    event.add('expert:smelting_devices','clayworks:kiln')
    event.remove('expert:smelting_devices','/woven/')
    event.remove('expert:smelting_devices','/burningfurnace/')
    event.add('expert:furnaces','minecraft:furnace')
    event.add('expert:furnaces','quark:deepslate_furnace')
    event.add('expert:furnaces','quark:blackstone_furnace')
    event.add('expert:furnaces','brickfurnace:brick_furnace')
    event.add('expert:apples',[
        'minecraft:apple',
        'buzzier_bees:honey_apple',
        'abyssal_decor:bog_apple',
        'burningfurnace:dry_apple',
    ])
    event.add('expert:meat/raw',[
        'minecraft:beef',
        'minecraft:porkchop',
        'minecraft:chicken',
        'minecraft:mutton',
        'minecraft:rabbit',
        'alexsdelight:raw_bison',
        'alexsdelight:raw_bunfungus',
        'alexsmobs:raw_catfish',
        'autumnity:turkey',
        'farmlife:tribull_shank',
        'farmlife:galliraptor',
        'naturalist:duck',
    ])
})