import { createHash } from 'crypto'

export default class Block {
    timestamp: number
    lastHash: string
    hash: string
    data: any

    constructor(timestamp, lastHash, hash, data) {
        this.timestamp = timestamp
        this.lastHash = lastHash
        this.hash = hash
        this.data = data
    }

    toString() {
        return `Block -
        timestamp: ${this.timestamp}
        lastHash: ${this.lastHash.substring(0, 10)}
        hash: ${this.hash.substring(0, 10)}
        data: ${this.data}`
    }

    static genesis() {
        return new this('Chancellor on brink of second bailout for health ', '-----', '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', [])
    }

    static mineBlock(lastBlock: Block, data): Block {
        const timestamp = Date.now()
        const lastHash = lastBlock.hash
        const hash = Block.hash(timestamp, lastHash, data)

        return new this(timestamp, lastHash, hash, data)
    }

    static hash(timestamp: number, lastHash: string, data): string {
        return createHash('sha256').update(`${timestamp}${lastHash}${data}`).digest('hex').toString()
    }

    static blockHash(block: Block): string {
        const { timestamp, lastHash, data } = block
        return Block.hash(timestamp, lastHash, data)
    }

}
