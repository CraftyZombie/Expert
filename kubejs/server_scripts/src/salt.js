ServerEvents.recipes(event=>{
    event.replaceOutput({},'salt:salt','spelunkery:salt')
    event.replaceInput({},'salt:salt','spelunkery:salt')
    event.replaceInput({},'vintagedelight:salt_block','salt:salt_block')
    event.remove([{input:'spelunkery:salt_block'},{output:'spelunkery:salt_block'}])
})