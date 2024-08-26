ServerEvents.recipes(event=>{
    event.remove([{id:'zetter:canvas'},{output:'zetter:artist_table'}])
    event.shaped('zetter:canvas',['A','A'],{A:'farmersdelight:canvas'})
    event.shaped('zetter:artist_table',['AB','CC','CC'],{A:'zetter:paints',B:'farmersdelight:canvas',C:'#forge:planks'})
})