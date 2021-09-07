let InitModule: nkruntime.InitModule = function (ctx, logger, nk, initializer) {
  logger.info('TypeScript module loaded.');
};

!InitModule && InitModule.bind(null);
