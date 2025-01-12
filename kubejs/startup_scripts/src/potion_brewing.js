MoreJSEvents.registerPotionBrewing(event=>{
    event.addCustomBrewing('netherexp:warped_wart',Ingredient.customNBT('minecraft:potion', nbt=>{
        return nbt.contains('Potion') && nbt.Potion == 'minecraft:water'
    }),'unusualend:warped_potion')
})