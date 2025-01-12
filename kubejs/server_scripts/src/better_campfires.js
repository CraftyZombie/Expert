ServerEvents.recipes(event=>{
    event.remove([{mod:'better_campfires'},])
    event.shaped('better_campfires:campfire_stick',['X','X'],{X:'#minecraft:logs'})
})