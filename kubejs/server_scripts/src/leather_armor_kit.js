ServerEvents.recipes(event=>{
    event.remove('leatheroverhaul:armor_kit')
    event.custom({type:'sewingkit:sewing',materials:[{ingredient:{item:'sewingkit:leather_sheet'},count:2},{ingredient:{item:'minecraft:string'},count:2}],result:{item:'leatheroverhaul:armor_kit'},"tool": {"type": "sewingkit:tool_ingredient","tool_type": "sewingkit_sew"}})
})