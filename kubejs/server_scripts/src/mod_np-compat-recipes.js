//Making the logs from other mods compatible with Natural Progressions.
ServerEvents.recipes(event=>{
    event.remove([
      {mod:'regions_unexplored',output:'#minecraft:planks',not:{input:'#forge:dyes'}},
      {mod:'quark',type:'minecraft:crafting_shapeless',output:'#minecraft:planks',not:{id:'/revert/'}},
      {id:'/log_to_stripped/'},
      {id:'cataclysm:chorus_planks'},
      {type:'natprog:damage_tools'},
      {id:'pearfection:callery_planks'},
      {id:'pizzacraft:olive_planks'},
      {id:'caupona:crafting/walnut_planks'},
      {id:'outer_end:azure_planks'},
      {id:'aquaculture:planks_from_driftwood'},
      {mod:'biomemakeover',output:'#minecraft:planks'},
      {id:'alexscaves:pewen_planks'},
      {id:'alexscaves:thornwood_planks'},
      {id:'snifferplus:stone_pine_planks'},
      {id:'fruitfulfun:citrus_planks'},
      {id:'fruitfulfun:redlove_planks'},
      {id:'gardens_of_the_dead:whistlecane_planks'},
      {id:'gardens_of_the_dead:soulblight_planks'},
      {id:'hibernalherbs:wood/myqueste_planks'}
   ])
    let axe = (input,output)=>{
      event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
          { item: input }
        ],
        tool: { tag: 'natprog:axe' },
        result: [
          { item: output, count: 1 }
        ]
      })}
    axe('regions_unexplored:stripped_palm_log','regions_unexplored:palm_planks')
    axe('regions_unexplored:stripped_pine_log','regions_unexplored:pine_planks')
    axe('regions_unexplored:stripped_redwood_log','regions_unexplored:redwood_planks')
    axe('regions_unexplored:stripped_cypress_log','regions_unexplored:cypress_planks')
    axe('regions_unexplored:stripped_dead_log','regions_unexplored:dead_planks')
    axe('regions_unexplored:stripped_joshua_log','regions_unexplored:joshua_planks')
    axe('regions_unexplored:stripped_ashen_log','regions_unexplored:ashen_planks')
    axe('regions_unexplored:stripped_silver_birch_log','regions_unexplored:silver_birch_planks')
    axe('regions_unexplored:stripped_baobab_log','regions_unexplored:baobab_planks')
    axe('regions_unexplored:stripped_blackwood_log','regions_unexplored:blackwood_planks')
    axe('regions_unexplored:stripped_brimwood_log','regions_unexplored:brimwood_planks')
    axe('regions_unexplored:stripped_willow_log','regions_unexplored:willow_planks')
    axe('regions_unexplored:stripped_cobalt_log','regions_unexplored:cobalt_planks')
    axe('regions_unexplored:stripped_kapok_log','regions_unexplored:kapok_planks')
    axe('regions_unexplored:stripped_larch_log','regions_unexplored:larch_planks')
    axe('regions_unexplored:stripped_magnolia_log','regions_unexplored:magnolia_planks')
    axe('regions_unexplored:stripped_maple_log','regions_unexplored:maple_planks')
    axe('regions_unexplored:stripped_mauve_log','regions_unexplored:mauve_planks')
    axe('regions_unexplored:stripped_socotra_log','regions_unexplored:socotra_planks')
    axe('regions_unexplored:stripped_eucalyptus_log','regions_unexplored:eucalyptus_planks')
    axe('minecraft:stripped_oak_log','minecraft:oak_planks')
    axe('minecraft:stripped_spruce_log','minecraft:spruce_planks')
    axe('minecraft:stripped_birch_log','minecraft:birch_planks')
    axe('minecraft:stripped_jungle_log','minecraft:jungle_planks')
    axe('minecraft:stripped_acacia_log','minecraft:acacia_planks')
    axe('minecraft:stripped_dark_oak_log','minecraft:dark_oak_planks')
    axe('minecraft:stripped_cherry_log','minecraft:cherry_planks')
    axe('minecraft:stripped_mangrove_log','minecraft:mangrove_planks')
    axe('minecraft:stripped_crimson_log','minecraft:crimson_planks')
    axe('minecraft:stripped_warped_log','minecraft:warped_planks')
    axe('biomesoplenty:stripped_fir_log','biomesoplenty:fir_planks')
    axe('biomesoplenty:stripped_redwood_log','biomesoplenty:redwood_planks')
    axe('biomesoplenty:stripped_mahogany_log','biomesoplenty:mahogany_planks')
    axe('biomesoplenty:stripped_jacaranda_log','biomesoplenty:jacaranda_planks')
    axe('biomesoplenty:stripped_palm_log','biomesoplenty:palm_planks')
    axe('biomesoplenty:stripped_willow_log','biomesoplenty:willow_planks')
    axe('biomesoplenty:stripped_dead_log','biomesoplenty:dead_planks')
    axe('biomesoplenty:stripped_magic_log','biomesoplenty:magic_planks')
    axe('biomesoplenty:stripped_umbran_log','biomesoplenty:umbran_planks')
    axe('biomesoplenty:stripped_hellbark_log','biomesoplenty:hellbark_planks')
    axe('biomemakeover:stripped_blighted_balsa_log','biomemakeover:blighted_balsa_planks')
    axe('biomemakeover:stripped_willow_log','biomemakeover:willow_planks')
    axe('biomemakeover:stripped_swamp_cypress_log','biomemakeover:swamp_cypress_planks')
    axe('biomemakeover:stripped_ancient_oak_log','biomemakeover:ancient_oak_planks')
    axe('alexscaves:stripped_pewen_log','alexscaves:pewen_planks')
    axe('alexscaves:stripped_thornwood_log','alexscaves:thornwood_planks')
    axe('architects_palette:stripped_twisted_log','architects_palette:twisted_planks')
    axe('autumnity:stripped_maple_log','autumnity:maple_planks')
    axe('abyssal_decor:stripped_blackwood_log','abyssal_decor:blackwood_planks')
    axe('betterarcheology:rotten_log','betterarcheology:rotten_planks')
    axe('cataclysm:chorus_stem','cataclysm:chorus_planks')
    axe('upgrade_aquatic:stripped_river_log','upgrade_aquatic:river_planks')
    axe('upgrade_aquatic:stripped_driftwood_log','upgrade_aquatic:driftwood_planks')
    axe('outer_end:azure_stripped_stem','outer_end:azure_planks')
    axe('snifferplus:stripped_stone_pine_log','snifferplus:stone_pine_planks')
    axe('pearfection:stripped_callery_stem','pearfection:callery_planks')
    axe('pizzacraft:stripped_olive_log','pizzacraft:olive_planks')
    axe('quark:stripped_azalea_log','quark:azalea_planks')
    axe('quark:stripped_ancient_log','quark:ancient_planks')
    axe('quark:stripped_blossom_log','quark:blossom_planks')
    axe('caupona:stripped_walnut_log','caupona:walnut_planks')
    axe('aquaculture:driftwood','upgrade_aquatic:driftwood_planks')
    axe('fruitfulfun:stripped_citrus_log','fruitfulfun:citrus_planks')
    axe('fruitfulfun:stripped_redlove_log','fruitfulfun:redlove_planks')
    axe('gardens_of_the_dead:stripped_soulblight_hyphae','gardens_of_the_dead:soulblight_planks')
    axe('gardens_of_the_dead:whistlecane_block','gardens_of_the_dead:whistlecane_planks')
    axe('hibernalherbs:stripped_myqueste_log','hibernalherbs:myqueste_planks')
    let saw = (input,output)=>{
      event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
          { item: input }
        ],
        tool: { tag: 'natprog:saw' },
        result: [
          { item: output, count: 4 }
        ]
      })}
     saw('regions_unexplored:stripped_palm_log','regions_unexplored:palm_planks')
     saw('regions_unexplored:stripped_pine_log','regions_unexplored:pine_planks')
     saw('regions_unexplored:stripped_redwood_log','regions_unexplored:redwood_planks')
     saw('regions_unexplored:stripped_cypress_log','regions_unexplored:cypress_planks')
     saw('regions_unexplored:stripped_dead_log','regions_unexplored:dead_planks')
     saw('regions_unexplored:stripped_joshua_log','regions_unexplored:joshua_planks')
     saw('regions_unexplored:stripped_ashen_log','regions_unexplored:ashen_planks')
     saw('regions_unexplored:stripped_silver_birch_log','regions_unexplored:silver_birch_planks')
     saw('regions_unexplored:stripped_baobab_log','regions_unexplored:baobab_planks')
     saw('regions_unexplored:stripped_blackwood_log','regions_unexplored:blackwood_planks')
     saw('regions_unexplored:stripped_brimwood_log','regions_unexplored:brimwood_planks')
     saw('regions_unexplored:stripped_willow_log','regions_unexplored:willow_planks')
     saw('regions_unexplored:stripped_cobalt_log','regions_unexplored:cobalt_planks')
     saw('regions_unexplored:stripped_kapok_log','regions_unexplored:kapok_planks')
     saw('regions_unexplored:stripped_larch_log','regions_unexplored:larch_planks')
     saw('regions_unexplored:stripped_magnolia_log','regions_unexplored:magnolia_planks')
     saw('regions_unexplored:stripped_maple_log','regions_unexplored:maple_planks')
     saw('regions_unexplored:stripped_mauve_log','regions_unexplored:mauve_planks')
     saw('regions_unexplored:stripped_socotra_log','regions_unexplored:socotra_planks')
     saw('regions_unexplored:stripped_eucalyptus_log','regions_unexplored:eucalyptus_planks')
     saw('minecraft:stripped_oak_log','minecraft:oak_planks')
     saw('minecraft:stripped_spruce_log','minecraft:spruce_planks')
     saw('minecraft:stripped_birch_log','minecraft:birch_planks')
     saw('minecraft:stripped_jungle_log','minecraft:jungle_planks')
     saw('minecraft:stripped_acacia_log','minecraft:acacia_planks')
     saw('minecraft:stripped_dark_oak_log','minecraft:dark_oak_planks')
     saw('minecraft:stripped_cherry_log','minecraft:cherry_planks')
     saw('minecraft:stripped_mangrove_log','minecraft:mangrove_planks')
     saw('minecraft:stripped_crimson_log','minecraft:crimson_planks')
     saw('minecraft:stripped_warped_log','minecraft:warped_planks')
     saw('biomesoplenty:stripped_fir_log','biomesoplenty:fir_planks')
     saw('biomesoplenty:stripped_redwood_log','biomesoplenty:redwood_planks')
     saw('biomesoplenty:stripped_mahogany_log','biomesoplenty:mahogany_planks')
     saw('biomesoplenty:stripped_jacaranda_log','biomesoplenty:jacaranda_planks')
     saw('biomesoplenty:stripped_palm_log','biomesoplenty:palm_planks')
     saw('biomesoplenty:stripped_willow_log','biomesoplenty:willow_planks')
     saw('biomesoplenty:stripped_dead_log','biomesoplenty:dead_planks')
     saw('biomesoplenty:stripped_magic_log','biomesoplenty:magic_planks')
     saw('biomesoplenty:stripped_umbran_log','biomesoplenty:umbran_planks')
     saw('biomesoplenty:stripped_hellbark_log','biomesoplenty:hellbark_planks')
     saw('biomemakeover:stripped_blighted_balsa_log','biomemakeover:blighted_balsa_planks')
     saw('biomemakeover:stripped_willow_log','biomemakeover:willow_planks')
     saw('biomemakeover:stripped_swamp_cypress_log','biomemakeover:swamp_cypress_planks')
     saw('biomemakeover:stripped_ancient_oak_log','biomemakeover:ancient_oak_planks')
     saw('alexscaves:stripped_pewen_log','alexscaves:pewen_planks')
     saw('alexscaves:stripped_thornwood_log','alexscaves:thornwood_planks')
     saw('architects_palette:stripped_twisted_log','architects_palette:twisted_planks')
     saw('autumnity:stripped_maple_log','autumnity:maple_planks')
     saw('abyssal_decor:stripped_blackwood_log','abyssal_decor:blackwood_planks')
     saw('betterarcheology:rotten_log','betterarcheology:rotten_planks')
     saw('cataclysm:chorus_stem','cataclysm:chorus_planks')
     saw('upgrade_aquatic:stripped_river_log','upgrade_aquatic:river_planks')
     saw('upgrade_aquatic:stripped_driftwood_log','upgrade_aquatic:driftwood_planks')
     saw('outer_end:azure_stripped_stem','outer_end:azure_planks')
     saw('snifferplus:stripped_stone_pine_log','snifferplus:stone_pine_planks')
     saw('pearfection:stripped_callery_stem','pearfection:callery_planks')
     saw('pizzacraft:stripped_olive_log','pizzacraft:olive_planks')
     saw('quark:stripped_azalea_log','quark:azalea_planks')
     saw('quark:stripped_ancient_log','quark:ancient_planks')
     saw('quark:stripped_blossom_log','quark:blossom_planks')
     saw('caupona:stripped_walnut_log','caupona:walnut_planks')
     saw('aquaculture:driftwood','upgrade_aquatic:driftwood_planks')
     saw('fruitfulfun:stripped_citrus_log','fruitfulfun:citrus_planks')
     saw('fruitfulfun:stripped_redlove_log','fruitfulfun:redlove_planks')
     saw('gardens_of_the_dead:stripped_soulblight_hyphae','gardens_of_the_dead:soulblight_planks')
     saw('gardens_of_the_dead:whistlecane_block','gardens_of_the_dead:whistlecane_planks')
     saw('hibernalherbs:stripped_myqueste_log','hibernalherbs:myqueste_planks')
})