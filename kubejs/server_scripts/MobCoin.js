//生物死亡事件
EntityEvents.death( event => {
    //获取实际击杀源  tacz.bullet
    let player = event.source.actual
    if(player.isPlayer()){   
        let mobType = event.entity.getType().toString
        let mobCoin = parseInt(global.$MobCoinImpl.get(mobType))
        if (mobCoin || 0 ) {

            player.tell("Mob: " + parseInt(mobCoin))
            let coin = new global.PlayerCoin(player);
            coin.add(mobCoin);
            player.tell("coin: " + coin.get())

        }
    }
})
