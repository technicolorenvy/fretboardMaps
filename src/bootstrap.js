let bootstrap = (ob) => {
  const { fretboardService } = ob;

 return new Promise((resolve) => {
  fretboardService.importInstruments()
    .then(() => {
      resolve();
    })
 });
};

export default bootstrap;