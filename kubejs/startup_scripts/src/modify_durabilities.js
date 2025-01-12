ItemEvents.modification(event=>{
    event.modify('natprog:flint_hatchet',e=>{
        e.maxDamage = 32
    })
    event.modify('natprog:bone_pickaxe',e=>{
        e.maxDamage = 24
    })
    event.modify('minecraft:stone_shovel',e=>{
        e.maxDamage = 32
    })
    event.modify('minecraft:stone')
})