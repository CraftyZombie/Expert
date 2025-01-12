ServerEvents.recipes(event=>{
    event.remove(
        [
            {id:'delightful:knives/bone'}
        ]
    )
    event.shaped(
        'delightful:bone_knife',
        ['A','B'],
        {A:'natprog:bone_shard',B:'minecraft:stick'})
    
})