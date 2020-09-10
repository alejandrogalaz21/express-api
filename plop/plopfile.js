module.exports = function (plop) {
  // controller generator
  plop.setGenerator('controller', {
    description: 'application controller logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'module name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'app/{{name}}/{{name}}.controller.js',
        templateFile: 'plop/plop-templates/controller.js.hbs',
      },
      {
        type: 'add',
        path: 'app/{{name}}/{{name}}.js',
        templateFile: 'plop/plop-templates/model.js.hbs',
      },
    ],
  })
}
