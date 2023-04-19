# algoSpace

A momentus occasion this is indeed. The first commit to my Github in ages. If optimistic projections come to fruition, this readme will be filled with useful notes from the data structures and algorithms course that I intend to work on. Goal setting at it's finest. 

## Big O

Measuring scalability

### Rules for Simplifying Big O

1. **Only concerned with worst case**: So while it's nice if a function has some logic to stop running once a certain outcome is reached, thereby preventing unnecessary iterations, that doesn't technically affect the official time complexity.
2. **Drop constants**: For Big O, we really care about the SHAPE of the line when we graph operations by input size. For example, a function with two for loops might be thought of as O(2n), but it's really just O(n). The line has a steeper slope, but it is still straight, not curved exponentially or logarithmically.
3. **Each function arg should be represented**: If a function takes two inputs, the Big O notation should reflect that. So for inputs a and b that are handled linearly, it would be O(a + b)
4. **Drop non-dominant terms**: For complex functions with multiple steps, we only care about the most time complex part. So if theres some constant or linear part that comes before/after a nested loop, we don't include all the pieces like O(n + 100 + n^2). It would just be O(n^2). Since this is all about scaling, we want to focus on the most significant factor in how the function will scale.

## Data Structures

There are only a handful of operations that are possible accross various data structures. Insertion, removal, search, sort and access.

### Arrays & Hash Tables

The array methods `push` and `pop` are the cheapest operations at O(1) since they don't impact the existing elements, just either add a new one at the end, or remove the last one.  `shift`, `unshift` and `splice` are O(n) since we simplify the notation to look at the worst case and since indexes of existing elements have to change.

***Hash Tables (objects)***: Looking under the hood a bit, we see that when a property is added to an object, it is actually added to an array-like data structure that looks like `[[key, value], [key, value]]`. When a new property is added, a hash function converts the key to a hash code that can be thought of as an address, a unique id that can be used to retrieve the value later. Important to know that with this system, any kind of order is disregarded. It's like, an empty object has a bunch of shelves, and things get put wherever there is a space.

Important takeaway is that iterating through an object is less efficient than iterating through an array because with an object, there is the extra step with each item to access the value with the key. With an array, there is no key. You simply access each value. JS has optimizations in place to minimize a performance hit with object iteration. But it seems like if you can avoid it and use an array instead, it's a better practice.  While iterating through each data structure has the same time complexity of O(n), if we dig deeper, the constant part of the equation is larger with an object.

### Linked Lists

A chain of objects, each with a `value` and a `next` property where the final node in the chain has a `next` property of `null`

***PROS***
- Adding a node to the top or bottom is O(1) since just one pointer needs to be updated

***CONS***
- Inserting, deleting or looking up a node in the middle of the list requires traversal, which is O(n) (worst case), since you can't simply jump to a specific node. Have to keep accessing the `next` property until the desired point is reached.

### Stacks + Queues

Stacks are a pile of plates, Queues are people in line. Both are narrowly applicable but when they're the right tool for the job, they're great. An array doesn't make for a great Queue implementation because dequeueing requires unshifting, which is O(n).

## Trees

A branching, "vertical" data structure with the DOM as a chief example.

### Binary

A tree where a node can have zero, one or two child nodes. Every child node has only one parent.

***Perfect***: Every parent node has two children. This leads to certain conditions that can help with writing algorithms that deal with this structure.  Each level of the tree will have double the nodes of the level above. And the bottom level will have the total number of nodes above plus one. For example, a three level perfect binary tree will have four nodes on the bottom, with two above that and one above that - 4 = (2 + 1) + 1.

### BST

Binary Search Tree is a subset of Binary Trees that specifies how the values of nodes are organized. I guess it only applies to numbers, although I suppose it could be done with strings compared with alphabetical order. The rule is that the greater of a node's children goes to the right and the other on the left. This allows for more efficient lookup, since we can check if the number we're looking for is greater or less than the parent node and proceed accordingly. 

While the BST is never the fastest data structure, as it doesn't allow any operations at O(1) efficiency, it also isn't the slowest and offers consistent O(log n) efficiency for the standard set of operations, which beats O(n). Notable caveat is the tree needs to be balanced, meaning an equal number of nodes on each side of the initial parent, otherwise efficiency drops to linear.

### Binary Heap

A similar tree structure to the BST but with an important distinction. Binary Heaps do away with the "left child must be less than right child" thing, and when inserting, just places child nodes in order from left to right. It only ensures that child nodes are less than the parent (or greater than if you flip the tree to have the max value at the root). So essentially, the data is a little less organized, but this allows certain things to be done faster. The binary search tree is best at, wait for it, searching, because of the sorted child nodes. A binary heap can be faster at inserting, and gives you a nice O(1) for getting the min and max nodes. Binary heaps can be used to implement something called a priority queue, which takes the basic idea of a queue and layers in a priority factor, so not all elements are weighted equally.

A Trie is another variation of a binary heap, although this one is no longer binary. It si a specialized structure ideal for searching for text.

## Graphs

A graph is a non-linear data structure commonly used to represent real world relationships and networks like social media, maps and the internet and coomputer networks themselves. It consists of nodes (also called verticies) and edges (also called arcs or lines). There are many sub-varieties of graphs broken out by certain characteristics.  A directed graph (digraph), edges are unidirectional, meaning there is a one way relationship between two nodes. As a shorthand for this, think of Twitter followers, where if you follow someone, it doesn't mean they follow you back.  Undirected graphs have bidirectinal relationships. This is more akin to Facebook, where users are friends with each other. If A is friends with B, B is obviously friends with A.  

Graphs can be cyclic or acyclic. Cyclic means that it's possible to travel from a starting node and arrive back at the starting node. So a circle can be made. Acyclical means this is not possible.  Another common variant is the weighted graph, where the edges or connecting lines have a weight or cost associated with it.

There are several ways of implementing a graph data structure that can be done with arrays or objects.

- Edge List: An array of arrays or an object with arrays as values. Each subarray contains two values representing every connection in the graph. `[[0, 1], [0, 2], [1,2]]` is just listing all the connections in the graph.

- Adjacency list: In this version, the index of the array represents the node, with each subarray listing the nodes connected to it. `[[2], [2, 3], [0, 1], [1]]`: Node 0 is connected to Node 2, Node 1 is connected to Nodes 2 and 3, and so on.

- Adjacency Matrix: Similar to the adjacency list, this one can use 0 or 1 as a boolean showing a given node's connection with every other node. Or in the case of a weighted graph, it can show the weight value or 0 if not connected.

## Algorithms

### Sort

In most cases, it's more about choosing the best sorting algorithm for the job rather than coding one from scratch, since many people smarter than us have spent years perfecting them.  While there are many more than these, five common varieties to know are Bubble, Insertion, Selection, Merge and Quick.  Those can be grouped into two buckets, simple and complex:

- *Simple*: Bubble, Insertion, Selection
- *Complex*: Merge, Quick