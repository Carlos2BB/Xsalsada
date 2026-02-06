moveTo(x,y){
this.nodes[0].updateRelative(true,true);
Let d=Math.hypot(x-this.end.x,y-this.end.y)



moveTo(x,y) {
this.nodes[0].updateRelative(true, true);
Seja d Math.hypot(x this.end.x,y this.end.y), 1 Math.max(0,d-this.speed);
for(let i-this.nodes.length-1;10;1)(
Seja n this.nodes[i],a-Math.atan2 (n.y y,n.x x);
n.x-x-1 Math.cos(a);n.y-y-1 Math.sin(a);
xn.x;y n.y;l n.size)
for(Let n of this.nodes) (
n.absAngle Math.atan2(n.y n.parent.y,n.x n.parent.x);
n.relAngle-n.absAngle n.parent.absAngle;
for(letic of n.children)if(this.nodes.includes(c))c.updateRelative(true,false)}
}
update(){this.moveTo(Input.mouse.x, Input.mouse.y)}
