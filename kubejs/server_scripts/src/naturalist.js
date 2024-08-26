ServerEvents.recipes(event=>{
    event.remove([
        {id:'naturalist:teddy_bear'}
    ])
    event.shaped('naturalist:teddy_bear',[' A ','ABA',' A '],{A:'alexsmobs:bear_fur',B:'#minecraft:wool'})
})