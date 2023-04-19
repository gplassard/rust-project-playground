const { RustProject } = require('@gplassard/projen-extensions');

const project = new RustProject({
   name: 'rust-project-playground',
   cargo: {
      package: {
         authors: ["user <user@mail.com>"],
         version: '1.0.0',
         edition: "2021",
      },
      dependencies: {
      }
   }
});
project.synth();