ServerEvents.recipes(event=>{
    event.remove([
        {id:'minecraft:brick'},
        {id:'clayworks:brick_from_baking'}
    ])
    event.shaped('4x simply_immersive_bricks:uncooked_clay_brick',['XXX','XYX','XXX'],{X:'minecraft:clay_ball',Y:'farmersdelight:organic_compost'})
    event.custom({type:'clayworks:baking',cookingtime:200,experience:0.3,ingredient:{item:'simply_immersive_bricks:uncooked_clay_brick'},result:'minecraft:brick'})
    
})