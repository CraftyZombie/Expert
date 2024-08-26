ServerEvents.recipes(event=>{
    event.remove([
        {id:'delightful:candle_from_animal_fat'},
        {id:'delightful:knives/bone_knife'},
        {id:'delightful:cutting/sugar_cane'}
    ])
    event.shaped('delightful:bone_knife',['A','B'],{A:'natprog:bone_shard',B:'minecraft:stick'})
})