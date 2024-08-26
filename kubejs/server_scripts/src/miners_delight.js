ServerEvents.recipes(event=>{
    event.replaceInput({input:'minecraft:water_bucket'},'minecraft:water_bucket',['minecraft:water_bucket','miners_delight:water_cup'])
    event.replaceInput({mod:'miners_delight'},'minecraft:wooden_shovel','kubejs:spoon')
    event.smoking('miners_delight:cooked_arthropod','miners_delight:arthropod')
    event.campfireCooking('miners_delight:cooked_arthropod','miners_delight:arthropod')
})