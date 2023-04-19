const { RustProject } = require('@gplassard/projen-extensions');

const project = new RustProject({
   name: 'rust-project-playground',
   cargo: {
      package: {
         authors: ["user <user@mail.com>"],
         version: 'version',
         edition: "2021",
      },
      dependencies: {
      }
   }
});
project.synth();