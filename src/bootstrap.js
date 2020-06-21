let bootstrap = (ob) => {
  const {
    builderService,
    fretboardService
  } = ob;

 return new Promise((resolve) => {
  builderService.importInstruments()
    .then(() => {
      resolve();
    })
 });
};

export default bootstrap;