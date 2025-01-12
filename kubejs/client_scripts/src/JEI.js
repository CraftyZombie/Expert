// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded client scripts)')

JEIEvents.hideItems(event=>{
    event.hide([
    ])
})

JEIEvents.addItems(event=>{
    event.add('simply_immersive_bricks:uncooked_clay_brick')
    event.add('sanitydim:garland')
})

JEIEvents.removeCategories(event=>{
    event.remove('brickfurnace:smoking')
    event.remove('brickfurnace:blasting')
    event.remove('brickfurnace:smelting')
    event.remove('rechiseled:chiseling')
})