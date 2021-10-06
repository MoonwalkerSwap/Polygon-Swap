pragma solidity >=0.5.17;

import '../MoonWalkerSwapBEP20.sol';

contract BEP20 is MoonWalkerSwapBEP20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
