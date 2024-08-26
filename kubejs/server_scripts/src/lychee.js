ServerEvents.recipes(event=>{
    event.custom({type:'lychee:lightning_channeling',item_in:[{item:'enigmaticlegacy:earth_heart'}],contextual:{type:'execute',command:'execute if block ~ ~-1 ~ minecraft:obsidian',value:1},post:[{type:'place',block:'minecraft:crying_obsidian',offsetY:-1}]})
})