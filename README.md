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

