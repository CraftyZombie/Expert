ServerEvents.recipes(event=>{
    event.remove([{output:'/leather_(.*?)/',input:'minecraft:leather',type:'minecraft:crafting_shaped'},
        {id:'thinair:air_bladder'},
        {id:'domesticationinnovation:drum'}
    ])
    event.custom({type:'sewingkit:sewing',materials:[{count:3,ingredient:{item:'sewingkit:leather_sheet'}},{count:1,ingredient:{item:'sewingkit:leather_strip'}},{count:1,ingredient:{item:'forge:string'}}],result:{item:'thinair:air_bladder',nbt:{Damage:328}},"tool": {"type": "sewingkit:tool_ingredient","tool_type": "sewingkit_sew"}})
    event.custom({type:'sewingkit:sewing',materials:[{count:3,ingredient:{item:'sewingkit:leather_strip'}},{count:4,ingredient:{tag:'forge:string'}},{count:1,ingredient:{tag:'quark:hollow_logs'}}],result:{item:'domesticationinnovation:drum'},"tool": {"type": "sewingkit:tool_ingredient","tool_type": "sewingkit_sew"}})
    let leather_sheet = (input,count)=>{
        event.custom({type:'sewingkit:sewing',materials:[{count:1,ingredient:{item:input}}],result:{count:count,item:'sewingkit:leather_sheet'},tool:{tag:'forge:shears'}})
    }
    leather_sheet('alexscaves:tough_hide',5)
    leather_sheet('alexsmobs:kangaroo_hide',2)
    leather_sheet('nethersdelight:hoglin_hide',16)
    leather_sheet('quark:ravager_hide',8)
    let leather_strip = (input,count)=>{
        event.custom({type:'sewingkit:sewing',materials:[{count:1,ingredient:{item:input}}],result:{count:count,item:'sewingkit:leather_strip'},tool:{tag:'forge:shears'}})
    }
    leather_strip('alexscaves:tough_hide',3)
    leather_strip('alexsmobs:kangaroo_hide',1)
    leather_strip('nethersdelight:hoglin_hide',12)
    leather_strip('quark:ravager_hide',6)
})