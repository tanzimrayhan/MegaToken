
const MegaToken = artifacts.require('./MegaToken.sol');

contract('MegaToken', (accounts) => {
    var tokenInstance;

    it('initialzes the contract with correct values', () => {
        return MegaToken.deployed().then((instance) => {
            tokenInstance = instance;
            return tokenInstance.name();
        }).then((name) => {
            assert.equal(name, 'Mega Token', 'has the correct name');
            return tokenInstance.symbol();
        }).then((symbol) => {
            assert.equal(symbol, 'MEGA', 'has the correct symbol');
            return tokenInstance.standard();
        }).then((standard) => {
            assert.equal(standard, 'Mega Token v1.0', 'has the correct standard');
        });
    });

    it('sets the total supply upon deployment', async () => {
        return MegaToken.deployed().then((instance) => {
            tokenInstance = instance;
            return tokenInstance.totalSupply();
        }).then((totalSupply) => {
            assert.equal(totalSupply.toNumber(), 1000000, 'allocated the initial supply to 1,000,000');
            return tokenInstance.balanceOf(accounts[0]);
        }).then((adminBalance) => {
            assert.equal(adminBalance.toNumber(), 1000000, 'it allocates the initial supply to the admin account');
        });
    });
});