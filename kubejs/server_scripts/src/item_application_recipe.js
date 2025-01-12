ServerEvents.recipes(event=>{
    event.custom({type:'create:item_application',ingredients:[{tag:'forge:stripped_logs'},{item:'minecraft:leather'}],results:[{item:'minecraft:crafting_table'}]})
    let app = (block, input, result)=>{
        event.custom({type:'create:item_application',ingredients:[{item:block},{item:input}],results:[{item:result}]})
    }
    app('supplementaries:daub','minecraft:brick','kubejs:brick_1')
    app('kubejs:brick_1','minecraft:brick','kubejs:brick_2')
    app('kubejs:brick_2','minecraft:brick','kubejs:brick_3')
    app('kubejs:brick_3','minecraft:brick','kubejs:brick_4')
    app('kubejs:brick_4','immersive_weathering:mortar','minecraft:bricks')
})