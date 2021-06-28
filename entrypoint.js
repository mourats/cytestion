const fs = require('fs');
const inquirer = require('inquirer');
const spawn = require('cross-spawn');
const readline = require('readline');
const { execSync } = require('child_process');
const ora = require('ora');
const path_project = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Stage 1 - Verifying existence of cypress directory and necessary files
 *
 * Createo directory cypress if it does not exist and copy necessary
 * files from base directory.
 */
const verifyOrCreateDirectoryAndUtilFiles = () => {
  if (!checkCorrectStage(1)) return;

  if (!fs.existsSync('cypress/support')) {
    fs.mkdirSync('cypress/support', { recursive: true });
  }

  if (!fs.existsSync('cypress/plugins')) {
    fs.mkdirSync('cypress/plugins', { recursive: true });
  }

  if (!fs.existsSync('cypress/integration')) {
    fs.mkdirSync('cypress/integration', { recursive: true });
  }

  const configFileExists =
    fs.existsSync('cypress.json') &&
    Object.keys(JSON.parse(fs.readFileSync('cypress.json'))).includes(
      'baseUrl'
    );
  const indexFileBase = fs
    .readFileSync('data/base-files/support.index.js')
    .toString();
  const indexFileExists =
    fs.existsSync('cypress/support/index.js') &&
    fs
      .readFileSync('cypress/support/index.js')
      .toString()
      .includes(indexFileBase);

  const commandsFileBase = fs
    .readFileSync('data/base-files/support.commands.js')
    .toString();
  const commandsFileExists =
    fs.existsSync('cypress/support/commands.js') &&
    fs
      .readFileSync('cypress/support/commands.js')
      .toString()
      .includes(commandsFileBase);

  const indexPluginBase = fs
    .readFileSync('data/base-files/plugins.index.js')
    .toString();
  const indexPluginExists =
    fs.existsSync('cypress/plugins/index.js') &&
    fs
      .readFileSync('cypress/plugins/index.js')
      .toString()
      .includes(indexPluginBase);

  const supportFilesCheck = () => {
    if (!indexFileExists) {
      console.log(
        'cypress/support/index.js does not exist or does not include the content of its referents in the base directory'
      );
      console.log('Copying the file from the base directory');
      fs.writeFileSync('cypress/support/index.js', indexFileBase);
    }
    if (!commandsFileExists) {
      console.log(
        'cypress/support/commands.js does not exist or does not include the content of its referents in the base directory'
      );
      console.log('Copying the file from the base directory');
      fs.writeFileSync('cypress/support/commands.js', commandsFileBase);
    }
    if (!indexPluginExists) {
      fs.writeFileSync('cypress/plugins/index.js', indexPluginBase);
    }
  };

  if (!configFileExists) {
    rl.question(
      'cypress.json file does not exist or does not contain baseUrl property.\nWhat is the url address? (e.g. http://localhost:3000/{application-name})\n> ',
      (applicationUrl) => {
        const configFile = { baseUrl: applicationUrl };
        fs.writeFileSync('cypress.json', JSON.stringify(configFile));
        rl.close();
        supportFilesCheck();
        goToNextStage();
      }
    );
  } else {
    supportFilesCheck();
    goToNextStage();
  }
};

/**
 * Stage 2 - Checks if the tests have already been generated today, enabling overwriting
 *
 * Prompts the user for select whether to overwrite the test file or abort the generation
 */
const checkTestsAlreadyGenerate = async () => {
  if (!checkCorrectStage(2)) return;

  const pathTestFile = 'cypress/integration';
  const fileTestName = 'cytestion.spec.js';
  const date = new Date().toISOString().slice(0, 10);
  const fileTest = `${pathTestFile}/${date}/${fileTestName}`;

  if (fs.existsSync(fileTest)) {
    const selectionQuestion = {
      name: 'selectedOption',
      message:
        'Tests have already been generated today. Do you want to overwrite or abort?',
      type: 'list',
      choices: ['Overwrite test file', 'Abort the generation'],
    };

    try {
      const promptedModule = await inquirer.prompt(selectionQuestion);
      if (promptedModule.selectedOption === 'Overwrite test file') {
        execSync(`rm ${fileTest}`);
        let filesTmp = fs
          .readdirSync('tmp/')
          .filter((file) => file !== '.gitkeep');
        if (filesTmp.length > 0)
          execSync(`rm -v ${path_project.resolve(__dirname, fileTest)}`);
      } else if (promptedModule.selectedOption === 'Abort the generation') {
        process.exit(0);
      }
    } catch (error) {
      onError(error);
    }
  }

  goToNextStage();
};

/**
 * Stage 3 - Generating tests
 *
 * Exec yarn command for tests generation
 */
const generateTests = () => {
  if (!checkCorrectStage(3)) return;

  const pathTestFile = 'cypress/integration';
  const fileTestName = 'cytestion.spec.js';
  const date = new Date().toISOString().slice(0, 10);
  const fileTest = `${pathTestFile}/${date}/${fileTestName}`;

  const runner = spawn('yarn', ['start-generate']);
  const spinner = ora('Waiting...').start();
  spinner.color = 'green';

  runner.on('close', (code) => {
    spinner.succeed(`Test file generated! (${fileTest})`);
    process.exit(code);
  });

  runner.stderr.on('data', (data) => {
    onError(data);
  });
};

const printPrettyWelcome = () => {
  console.info(
    '\033[1;92mWelcome to Cytestion!\033[0;0m ' +
      'Automatic ad-hoc test code generator, using the cypress framework'
  );
};

const infoPrettyPrint = (message) => {
  console.info('\033[1;92mINFO:\033[0;0m ' + message);
};

const onError = (error) => {
  console.log('Error at stage', currentStage.name);
  console.log(error.toString());
  process.exit(1);
};

const checkCorrectStage = (stageNumber) => {
  return currentStage.id === stageNumber;
};

const setStage = (stageNumber) => {
  currentStage = stages.find((stage) => stage.id === stageNumber);

  infoPrettyPrint(`${currentStage.name}`);
};

const goToNextStage = () => {
  const nextStageNumber = currentStage.id + 1;

  setStage(nextStageNumber);
  currentStage = stages.find((stage) => stage.id === nextStageNumber);

  currentStage.func();
};

const stages = [
  {
    id: 1,
    name: 'Verifying existence of cypress directory and necessary files',
    func: verifyOrCreateDirectoryAndUtilFiles,
  },
  {
    id: 2,
    name: 'Checks if the tests have already been generated today, enabling overwriting',
    func: checkTestsAlreadyGenerate,
  },
  {
    id: 3,
    name: 'Generating Tests',
    func: generateTests,
  },
];

printPrettyWelcome();
setStage(1);
verifyOrCreateDirectoryAndUtilFiles();
