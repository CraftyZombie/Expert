ServerEvents.recipes(event=>{
    event.shaped(
        'ender_relay:ender_relay',
        ['XYX','YZY','XYX'],
        {X:'minecraft:obsidian',Y:'minecraft:popped_chorus_fruit',Z:'kubejs:lodestone_compass_display'})
})

ServerEvents.tags('item',event=>{
    event.add('expert:sf_farmersdelight',[
        '@farmersdelight',
        '@delightful',
        '@farmersrespite',
        '@miners_delight',
        '@nethersdelight',
        '@ends_delight',
        '@endersdelight',
        '@quarkdelight',
        '@vintagedelight',
        '@respiteful',
        '@silentsdelight',
        '@some_assembly_required'
    ])
    event.add('expert:sf_neapolitan',[
        '@neapolitan',
        '@seasonals',
        '@exquisito',
        '@respiteful'
    ])
})