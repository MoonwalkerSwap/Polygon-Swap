import { ChainId } from 'polygon-moonwalkerswap-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x377ce0f70d86c14309de3eb70697eb2b71bd8b6b'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
