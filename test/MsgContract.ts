import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('MsgContract', function () {
  it('Should get right msg', async function () {
    const MsgContract = await ethers.getContractFactory('MsgContract');
    const msgContract = await MsgContract.deploy('hello, world!');
    await msgContract.deployed();

    expect(await msgContract.getMsg()).to.equal('hello, world!');

    const newMsg = await msgContract.setMsg('hello, brix');

    await newMsg.wait();
    expect(await msgContract.getMsg()).to.equal('hello, brix');
  });
});
