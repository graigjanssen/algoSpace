# algoSpace

A momentus occasion this is indeed. The first commit to my Github in ages. If optimistic projections come to fruition, this readme will be filled with useful notes from the data structures and algorithms course that I intend to work on. Goal setting at it's finest. 

## Big O

Measuring scalability

### Rules for Simplifying Big O

1. **Only concerned with worst case**: So while it's nice if a function has some logic to stop running once a certain outcome is reached, thereby preventing unnecessary iterations, that doesn't technically affect the official time complexity.
2. **Drop constants**: For Big O, we really care about the SHAPE of the line when we graph operations by input size. For example, a function with two for loops might be thought of as O(2n), but it's really just O(n). The line has a steeper slope, but it is still straight, not curved exponentially or logarithmically.