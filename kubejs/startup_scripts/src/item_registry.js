//Item Registry for Expert Modpack. Written by crafty_zombie.
console.info('Hello, World! (Loaded startup scripts)')

//The following items are only crafting materials and have no special functions or behaviors.
StartupEvents.registry('item',event=>{
    event.create('garland_fragment').texture('expert:item/garland_fragment').displayName('Garland Fragment')
    event.create('processed_iron').texture('expert:item/processed_ore/iron').displayName('Processed Iron')
    event.create('processed_gold').texture('expert:item/processed_ore/gold').displayName('Processed Gold')
    event.create('processed_silver').texture('expert:item/processed_ore/silver').displayName('Processed Silver')
    event.create('processed_copper').texture('expert:item/processed_ore/copper').displayName('Processed Copper')
    event.create('kevin_hart').texture('expert:item/kevin_hart').displayName('Kevin Hart').glow(true).rarity('epic').maxStackSize(1).tooltip("Don't ask...")
    event.create('lodestone_compass_display').texture('minecraft:item/compass_16').displayName('Lodestone Compass').glow(true).tooltip('Must be linked to a lodestone in the End.')
    event.create('incomplete_iron_boots').texture('expert:item/armor/incomplete_iron_boots').displayName('Incomplete Iron Boots').maxStackSize(1)
    event.create('incomplete_iron_leggings').texture('expert:item/armor/incomplete_iron_leggings').displayName('Incomplete Iron Leggings').maxStackSize(1)
    event.create('incomplete_iron_chestplate').texture('expert:item/armor/incomplete_iron_chestplate').displayName('Incomplete Iron Chestplate').maxStackSize(1)
    event.create('incomplete_iron_helmet').texture('expert:item/armor/incomplete_iron_helmet').displayName('Incomplete Iron Helmet').maxStackSize(1)
    event.create('spoon').texture('minecraft:item/wooden_shovel').displayName('Spoon').maxStackSize(1)
})

