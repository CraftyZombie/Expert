ServerEvents.recipes(event=>{
    event.remove([
        {
            output:'/tattered/',mod:'majruszsdifficulty'
        },
        {
            id:'majruszsdifficulty:enderium_ingot_horizontal'
        }
    ])
    event.replaceInput({id:'enigmaticlegacy:ender_ring'},'minecraft:ender_chest','majruszsdifficulty:ender_pouch')
})

ServerEvents.tags('block',event=>{
    event.add('forge:needs_netherite_tool','majruszsdifficulty:enderium_shard_ore')
})

