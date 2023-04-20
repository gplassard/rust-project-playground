const { RustProject } = require('@gplassard/projen-extensions');
const package = require('./package.json');

const project = new RustProject({
   name: 'rust-project-playground',
   cargo: {
      package: {
         authors: ["user <user@mail.com>"],
         version: package.version,
         edition: "2021",
      },
      dependencies: {
      }
   }
});
project.synth();
