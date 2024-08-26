ServerEvents.recipes(event=>{
    event.remove('spoiled:spoiling/vanilla_to_rotten_flesh')
    let spoil = (input, output, time)=>{
        event.custom({type:'spoiled:spoil_recipe',ingredient:{tag:input},
    spoiltime:time,
    result:{item:output}
})}
    spoil('expert:pastries','vintagedelight:organic_mash',120)
    spoil('forge:crops/tomato','farmersdelight:rotten_tomato',120)
    spoil('expert:apples','hauntedharvest:rotten_apple',240)
    spoil('expert:meat/raw','minecraft:rotten_flesh',40)
})