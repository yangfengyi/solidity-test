import path from 'path';
import shelljs from 'shelljs';

export const removeCompileFile = async (contractName: string) => {
  const pwd = shelljs.pwd();

  const artifactsPath = path.join(pwd.stdout, 'artifacts');
  const cachePath = path.join(pwd.stdout, 'cache');
  const typePath = path.join(pwd.stdout, 'typechain-types');

  // 删除合约编译文件
  shelljs.rm('-rf', artifactsPath);
  // 删除缓存文件
  shelljs.rm('-rf', cachePath);
  // 删除ethers编译文件
  shelljs.rm('-rf', typePath);
};
