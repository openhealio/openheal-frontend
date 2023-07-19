import Block from "./Block";

export default class Blockchain {
  chain: Block[];
  constructor() {
    this.chain = [Block.genesis()];
  }

  addBlock(data: Record<string, unknown>): Block {
    const lastBlock = this.chain[this.chain.length - 1];
    const block = Block.mineBlock(lastBlock, data);
    this.chain.push(block);

    return block;
  }

  isValidChain(chain: Block[]): boolean {
    return chain.reduce((acc, block, index) => {
      if (!index) {
        return JSON.stringify(block) === JSON.stringify(Block.genesis());
      }
      const lastBlock = chain[index - 1];
      return (
        acc &&
        block.lastHash === lastBlock.hash &&
        block.hash === Block.blockHash(block)
      );
    }, true);
  }

  replaceChain(newChain: Block[]) {
    if (newChain.length <= this.chain.length) {
      throw new Error("Received chain is not longer than the current chain.");
    } else if (!this.isValidChain(newChain)) {
      throw new Error("The received chain is not valid.");
    }

    console.log("Replacing blockchain with the new chain.");
    this.chain = newChain;
  }
}
