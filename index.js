function depthFirstSearch(root, vertices, edges){
		let stack = []
		stack.push(root)
		let visited = [root]

		while(stack.length != 0){
			let v = stack.pop()
			if(!v.discovered){
				v.discovered = true

				findAdjacent(v.name, vertices, edges).forEach(function(node){
					visited.push(node)
					stack.push(node)
				})
			}
		}
		return visited;
}

function findAdjacent(nodeName,  vertices, edges){
  return edges.filter(function(edge){
    return edge.includes(nodeName)
  }).map(function(edge){
    return edge.filter(function(node){
      return (node != nodeName)
    })[0]
  }).map(function(name){
    return findNode(name, vertices)
  }).filter(function(node){
		return !node.discovered
	})
}

function findNode(nodeName, vertices){
  return vertices.find(function(vertex){
    return vertex.name === nodeName
  })
}
