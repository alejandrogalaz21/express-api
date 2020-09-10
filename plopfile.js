module.exports = function (plop) {
  // module generator
  plop.setGenerator('module', {
    description: 'application module logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'module name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'app/{{camelCase name}}/{{camelCase name}}.controller.js',
        templateFile: 'plop/plop-templates/module-controller.js.hbs',
        skipIfExists: true
      },
      {
        type: 'add',
        path: 'app/{{camelCase name}}/{{camelCase name}}.js',
        templateFile: 'plop/plop-templates/model.js.hbs',
        skipIfExists: true
      }
    ]
  })
  // controller generator
  plop.setGenerator('controller', {
    description: 'application controller logic',
    prompts: [
      {
        type: 'input',
        name: 'dir',
        message: 'what dir please ?'
      },
      {
        type: 'input',
        name: 'name',
        message: 'controller name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'app/{{dir}}/{{camelCase name}}.controller.js',
        templateFile: 'plop/plop-templates/controller.js.hbs',
        skipIfExists: true
      }
    ]
  })
  // model
  plop.setGenerator('model', {
    description: 'application controller logic',
    prompts: [
      {
        type: 'input',
        name: 'dir',
        message: 'what dir please ?'
      },
      {
        type: 'input',
        name: 'name',
        message: 'model name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'app/{{dir}}/{{camelCase name}}.js',
        templateFile: 'plop/plop-templates/model.js.hbs',
        skipIfExists: true
      }
    ]
  })
}
