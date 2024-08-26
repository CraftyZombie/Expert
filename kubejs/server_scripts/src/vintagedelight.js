ServerEvents.recipes(event=>{
    event.remove(
        [
            {id:'/vintagedelight:salt_(.*?)/',not:{id:'/brick/'},not:{id:'/pillar/'}},
            {id:'vintagedelight:evaporator'},
            {id:'/vintagedelight:chef_hats/',not:{input:'#forge:dyes'}},
            {id:'vintagedelight:integration/salt_convert'},
            {id:'vintagedelight:bread_from_smelting'},
            {id:'vintagedelight:oat_bread'}
        ]
    )
    event.shaped('vintagedelight:white_chefs_hat',['XXX','XYX','XXX'],{X:'minecraft:white_wool',Y:'pizzacraft:chef_hat'})
})

ServerEvents.tags('worldgen/biome',event=>{
    event.removeAll('vintagedelight:is_salt_spawn')
})