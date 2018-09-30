var getSRC = function() {
	let res = []; 
    let queue = [document.body]; 
    while (queue.length) {
        let node = queue.shift();
        for (let child of Array.from(node.children)) {
            queue.push(child);
        }
		let attrs = Array.from(node.attributes);
		
        if (attrs.some(attr => attr.name === "src")) {
            res.push(node);
        }
    }
    return res;
}

