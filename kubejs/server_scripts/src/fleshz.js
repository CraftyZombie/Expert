ServerEvents.recipes(event=>{
    event.remove([
        {id:'fleshz:wood_rack'}
    ])
    event.shaped('fleshz:wood_rack',['XX'],{X:'minecraft:stick'})
})

LootJS.modifiers(event=>{
    event.addEntityLootModifier('//').replaceLoot('minecraft:leather','fleshz:hide', true)
})