var reachingPoints = function(sx, sy, tx, ty) {
    /*
        starting at sx and sy requires too much computation with tons of options
        instead, work backwards from the end destination. 
        
        is the larger of the two end points - start point divided by other point * other point
    */
    while (tx >= sx && ty >= sy) {
         ty > tx ? ty %= tx : tx %= ty; 
    }
    return (tx === sx && (ty - sy) % tx === 0) || (ty === sy && (tx - sx) % ty === 0) 
}