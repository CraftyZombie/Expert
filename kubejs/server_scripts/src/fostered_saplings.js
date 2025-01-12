ServerEvents.recipes(event=>{
    let sapling = (INPUT,Output)=>{
        event.custom({
            type:'caupona:dolium',
            fluid:'minecraft:water',
            amount:1000,
            items:[{count:1,item:{item:INPUT}},{count:2,item:{item:'dirt'}}],output:{count:1,item:Output}})
    }
    sapling('fruitfulfun:tangerine','fruitfulfun:tangerine_sapling')
    sapling('fruitfulfun:lime','fruitfulfun:lime_sapling')
    sapling('fruitfulfun:citron','fruitfulfun:citron_sapling')
    sapling('fruitfulfun:pomelo','fruitfulfun:pomelo_sapling')
    sapling('fruitfulfun:orange','fruitfulfun:orange_sapling')
    sapling('fruitfulfun:lemon','fruitfulfun:lemon_sapling')
    sapling('minecraft:apple','fruitfulfun:apple_sapling')
    sapling('fruitfulfun:grapefruit','fruitfulfun:grapefruit_sapling')
    sapling('fruitfulfun:pomegranate','fruitfulfun:pomegranate_sapling')
    sapling('fruitfulfun:redlove','fruitfulfun:redlove_sapling')
    sapling('fruitfulfun:cherry','fruitfulfun:cherry_sapling')
})