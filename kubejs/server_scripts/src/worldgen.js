ServerEvents.tags('worldgen/biome',event=>{
    event.removeAll('vintagedelight:is_salt_spawn')
    event.removeAll('minecraft:has_structure/ruined_portal_desert')
    event.removeAll('minecraft:has_structure/ruined_portal_ocean')
    event.removeAll('minecraft:has_structure/ruined_portal_jungle')
    event.removeAll('minecraft:has_structure/ruined_portal_mountain')
    event.removeAll('minecraft:has_structure/ruined_portal_nether')
    event.removeAll('minecraft:has_structure/ruined_portal_ocean')
    event.removeAll('minecraft:has_structure/ruined_portal_standard')
    event.removeAll('minecraft:has_structure/ruined_portal_swamp')

})