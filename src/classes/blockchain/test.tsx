import Block from "./Block";

const block = new Block("foo", "bar", "zoo", "baz");
console.log(block.toString());
console.log(Block.genesis().toString());
const fisrtBlock = Block.mineBlock(Block.genesis(), "foo");
console.log(fisrtBlock.toString());
