ServerEvents.recipes(event=>{
    event.remove([
        {id:'brickfurnace:brick_furnace'},
        {id:'/quark:building/crafting/furnaces/'},
        {id:'brickfurnace:brick_smoker'},
        {id:'minecraft:smoker'}
    ])
    event.replaceInput([{input:'minecraft:furnace'},{input:'brickfurnace:brick_furnace'}],['minecraft:furnace','brickfurnace:brick_furnace'],['minecraft:furnace','quark:deepslate_furnace','quark:blackstone_furnace','brickfurnace:brick_furnace'])
    event.replaceInput({input:'minecraft:smoker'},'minecraft:smoker',['minecraft:smoker','brickfurnace:brick_smoker'])
    event.replaceInput({input:'minecraft:blast_furnace'},'minecraft:blast_furnace',['nethersdelight:blackstone_blast_furnace','brickfurnace:brick_blast_furnace','minecraft:blast_furnace'])
    event.shapeless('minecraft:furnace',[['minecraft:furnace','quark:deepslate_furnace','quark:blackstone_furnace','brickfurnace:brick_furnace'],'#forge:cobblestone'])
    event.shapeless('quark:deepslate_furnace',[['minecraft:furnace','quark:deepslate_furnace','quark:blackstone_furnace','brickfurnace:brick_furnace'],'minecraft:cobbled_deepslate'])
    event.shapeless('quark:blackstone_furnace',[['minecraft:furnace','quark:deepslate_furnace','quark:blackstone_furnace','brickfurnace:brick_furnace'],'minecraft:blackstone'])
    event.shapeless('brickfurnace:brick_furnace',[['minecraft:furnace','quark:deepslate_furnace','quark:blackstone_furnace','brickfurnace:brick_furnace'],'minecraft:brick'])
    event.shapeless('minecraft:blast_furnace',[['nethersdelight:blackstone_blast_furnace','brickfurnace:brick_blast_furnace'],'minecraft:smooth_stone'])
    event.shapeless('nethersdelight:blackstone_blast_furnace',[['minecraft:blast_furnace','brickfurnace:brick_blast_furnace'],'minecraft:blackstone'])
    event.shapeless('brickfurnace:brick_blast_furnace',[['nethersdelight:blackstone_blast_furnace','minecraft:blast_furnace'],'minecraft:brick'])
    event.shapeless('minecraft:smoker',['brickfurnace:brick_smoker','#forge:cobblestone'])
    event.shapeless('brickfurnace:brick_smoker',['minecraft:smoker','minecraft:brick'])
    event.shaped('brickfurnace:brick_smoker',[' X ','XYX',' X '],{X:'#minecraft:logs',Y:'brickfurnace:brick_furnace'})
    event.shaped('minecraft:smoker',[' X ','XYX',' X '],{X:'#minecraft:logs',Y:['minecraft:furnace','quark:deepslate_furnace','quark:blackstone_furnace']})
    event.shaped('brickfurnace:brick_furnace',['AAA','B B','DED'],{A:'minecraft:brick',B:'minecraft:bricks',D:'quark:sturdy_stone',E:'minecraft:campfire'})
})