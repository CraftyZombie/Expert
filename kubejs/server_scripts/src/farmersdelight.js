ServerEvents.recipes(event=>{
    event.remove(
        [
            {id:'farmersdelight:flint_knife'},
            {id:'farmersdelight:rope'},
            {id:'farmersdelight:cutting_board'},
            {id:'farmersdelight:cutting/sugar_cane_alt'}
        ]
    )
    event.shaped('farmersdelight:cutting_board',['XY','XY'],{X:'minecraft:stick',Y:'#forge:stripped_logs'})
    event.replaceOutput({},'farmersdelight:rope','supplementaries:rope')
    event.replaceInput({},'farmersdelight:rope','supplementaries:rope')
})

ServerEvents.tags('item',event=>{
    event.remove('forge:tools/knives','#call_of_yucutan:tecpatl')
})