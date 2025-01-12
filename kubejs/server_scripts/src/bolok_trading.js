ServerEvents.recipes(event=>{
    event.remove([
        {id:'unusualend:wart_trade'},
        {id:'unusualend:eating_warped_fungus_trade'}
    ])
    let bolok = (input,output,count)=>{
        event.custom({type:'unusualend:bolok_trading',ingredients:[{item:input}],output:{item:output,count:count}})
    }
    bolok('minecraft:warped_fungus','netherexp:warped_wart',1)
    bolok('minecraft:nether_wart','netherexp:warped_wart',1)
})