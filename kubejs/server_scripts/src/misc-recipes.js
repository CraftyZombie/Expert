// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.recipes(event=>{
    console.log('Hello, World! (Loaded custom recipes.)')
    //Furnace Recipes
    event.smelting('kubejs:processed_copper','minecraft:raw_copper')
    event.smelting('kubejs:processed_iron',['minecraft:raw_iron','spelunkery:raw_magnetite'])
    event.smelting('kubejs:processed_gold','minecraft:raw_gold')
    event.smelting('kubejs:processed_silver','galosphere:raw_silver')
    event.remove([{output:'#forge:nuggets',type:'minecraft:smelting'},{output:'#forge:ingots',type:'minecraft:smelting'},{output:'minecraft:iron_ingot',mod:'immersive_weathering'}])
    event.blasting('minecraft:iron_ingot','#expert:recycles_to_iron_ingot')
    




    //Grindstone Recipes
    let grindstone = (Input,Result,Count)=>{
        event.custom({type:'spelunkery:grindstone_polishing',ingredient:Input,result:Result,resultCount:Count,experience:9,byproduct:'minecraft:air',byproductMin:0,byproductMax:1})
    }
    grindstone('kubejs:processed_iron','minecraft:iron_nugget',3)
    grindstone('kubejs:processed_gold','minecraft:gold_nugget',3)
    grindstone('kubejs:processed_silver','galosphere:silver_nugget',3)
    grindstone('kubejs:processed_copper','spelunkery:copper_nugget',3)

    event.shaped('kubejs:kevin_hart',['XXX','XYX','XXX'],{X:'galosphere:golden_lichen_cordyceps',Y:'minecraft:nether_star'})
})

