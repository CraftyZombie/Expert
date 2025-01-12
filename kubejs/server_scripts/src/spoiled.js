ServerEvents.recipes(event=>{
    event.remove('spoiled:spoiling/vanilla_to_rotten_flesh')
    let spoil = (input, output, time)=>{
        event.custom({type:'spoiled:spoil_recipe',ingredient:{tag:input},
    spoiltime:time,
    result:{item:output}
})}
    spoil('expert:spoiled/spoils_to_organic_mash','vintagedelight:organic_mash',120)
    spoil('forge:crops/tomato','farmersdelight:rotten_tomato',120)
    spoil('expert:spoiled/spoils_to_rotten_apple','hauntedharvest:rotten_apple',240)
    spoil('expert:spoiled/spoils_to_rotten_flesh','minecraft:rotten_flesh',40)


})

ServerEvents.tags('item',event=>{
    event.add('expert:spoiled/spoils_to_rotten_apple',[
        'minecraft:apple',
        'buzzier_bees:honey_apple',
        'abyssal_decor:bog_apple',
        'burningfurnace:dry_apple',
    ])

    event.add('expert:spoiled/spoils_to_rotten_flesh',[
        'minecraft:beef',
        'minecraft:porkchop',
        'minecraft:chicken',
        'minecraft:mutton',
        'minecraft:rabbit',
        'alexsdelight:raw_bison',
        'alexsdelight:raw_bunfungus',
        'alexsmobs:raw_catfish',
        'autumnity:turkey',
        'farmlife:tribull_shank',
        'farmlife:galliraptor',
        'naturalist:duck',
        '#forge:meat'
    ])

    event.add('expert:spoiled/spoils_to_organic_mash',[
        '#c:fruits',
        '#forge:vegetables',
        'caupona:wolfberries',
        'caupona:figs',
        'abyssal_decor:muckroot',
        'spelunkery:grilled_portabella',
        'ecologics:coconut_slice',
        'neapolitan:roasted_adzuki_beans',
        'delightful:cactus_chunk',
        'delightful:cactus_steak'
    ])
})