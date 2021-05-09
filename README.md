# Guide for using cytestion

End-to-end test code generator, using the [cypress](https://www.cypress.io/) framework. It must be included as a [submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules), of a web application, which is the target of performing ad-hoc tests.

## Dependencies

##### It is necessary to have [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/) installed.
##### It is necessary to run in a web application, using the [Ant Desing](https://ant.design/) component library .

Install the project's dependencies, like this:

``
yarn
``

## Execution

The execution of cytestion is very simple, just run the test generation, like this:

``
yarn generate-test
``
##### Important:

In the first run, it will be necessary to inform the `baseUrl` that will be placed in the` cypress.json` file. In addition, the cypress dependency directory, already installed, will be created and the `commands.js` and` index.js` files, containing necessary functions, will be placed in the `cypress/support` path.

The generated artifact will be a test file called `cytestion.spec.js`, found in the path` cypress/integration/`.

## Details

The test generation process works as follows, an initial visit is made to the base url provided, after that, the html found on the page is analyzed and, selectively, new tests are created, from the identifiers `['id =', 'data-cy=', 'class=']` found. The final objective is to go through all possible paths by means of click and fill out the forms found, making your submission.

##### The test generation process is done by running it on the command line, but to exemplify what happens, see the gif:

![Alt Text](data/gif-readme/generate-test.gif)