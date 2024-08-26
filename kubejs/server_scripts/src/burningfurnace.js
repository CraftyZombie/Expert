ServerEvents.recipes(event=>{
    event.remove('burningfurnace:burned_food_powder')
    event.custom({type:'farmersplus:milling',ingredients:[{tag:'burningfurnace:burned_food'}],result:[{item:'burningfurnace:burned_food_powder'}]})
})

ServerEvents.tags('item',event=>{
    event.add('burningfurnace:burned_food',[
        'burningfurnace:combustible_food_waste',
        'burningfurnace:molten_food_waste'
    ])
})