ServerEvents.recipes(event=>{
    event.remove([
        {
            id:'natprog:crafting/bone_knife'
        },
        {
            output:'#natprog:saw'
        }
    ])
})

ServerEvents.tags('entity_type',event=>{
    event.add('natprog:drops_bone',[
        'alexsmobs:gazelle',
        'alexsmobs:emu',
        'alexsmobs:skunk',
        'alexsmobs:racoon',
        'alexsmobs:kangaroo',
        '@farmlife',
        'naturalist:zebra',
        'alexsmobs:seal',
        'alexsmobs:crocodile',
        'naturalist:alligator',
        'alexsmobs:roadrunner',
        'sullysmod:tortoise',
        'alexsmobs:gorilla',
        'alexsmobs:komodo_dragon',
        'neapolitan:chimpanzee',
        'alexsmobs:seagull',
        'autumnity:turkey',
        'naturalist:duck',
        'ambientadditions:siamang_gibbon',
        'alexsmobs:gelada_monkey',
        'alexsmobs:bison',
        'alexsmobs:crow',
        'naturalist:sparrow',
        'habitat:passerine',
        'alexsmobs:blue_jay',
        'snowpig:snow_pig',
        'mowziesmobs:naga'
    ])
})
