AFRAME .registerComponent("coins", {
    init:function(){
      for(var i = 1;i <= 10;i++) {
        const id=`coins${1}`;
        
    const posX = Math.random() * 100 + -50;
    const posY = Math.random() * 5 + 5;
    const posZ = Math.random() * 60 + -40;
    
    const position={x: posX, y: posY, z: posZ };
    
    this.createCoins(id, position)
    }

},
createCoins:function(id, position){
    var tresureRntity = document.querySelector("#tresureCoins")
    var coinEl = document.createElement("a-entity")

    coinEl.setAttribute("id",id);
    coinEl.setAttribute("position",position);
    
    coinEl.setAttribute("scale",{x:500, y:500, z:500});
    
    coinEl.setAttribute("gltf-model", "./assets/models/flying_bird/scene.gltf");

    coinEl.setAttribute("animation-mixer", {})  
    
    coinEl.setAttribute("static-body", {
    Shape:sphere,
    sphareRadius:2
    })
    
    tresureEntityEl.appendChild(coinEl);
}
})