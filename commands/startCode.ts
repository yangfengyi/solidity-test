import shelljs from 'shelljs';
import { fileHanlder } from './filehandler';
import { removeCompileFile } from './removeResult';

export default async function startTest(contractName: string, content: string) {
  const result = shelljs.pwd();

  console.log('this is where', result.stdout);

  fileHanlder(contractName, content);

  // 编译合约
  shelljs.exec('npx hardhat compile');

  // 执行指定的测试用例，并获取测试结果
  const contractTestResult = shelljs.exec(
    `npx hardhat test --grep ${contractName}`
  );

  console.log('测试是否成功:', contractTestResult.code);
  console.log('测试的内容:', contractTestResult.stdout);

  removeCompileFile(contractName);

  return {
    success: contractTestResult.code === 0,
    content: contractTestResult.stdout,
  };
}
