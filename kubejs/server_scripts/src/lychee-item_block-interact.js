ServerEvents.recipes(event=>{
    event.custom({type:'lychee:block_interacting',item_in:{item:'kubejs:brick_furnace_sheath'},block_in:'minecraft:campfire',post:[{type:'place',block:'brickfurnace:brick_furnace'}],contextual:[{type:'execute',command:'execute if block ~ ~ ~ minecraft:campfire[lit=false]',value:1}]})
    event.custom({type:'lychee:item_inside',block_in:'minecraft:water',item_in:[{item:'minecraft:bone_meal'},{item:'minecraft:clay_ball'},{item:'immersive_weathering:sand_layer_block'}],post:[{type:'drop_item',item:'immersive_weathering:mortar',count:16}]})
})