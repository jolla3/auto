
// // // config-overrides.js
// // module.exports = function override(config, env) {
// //   // Remove source-map-loader from node_modules
// //   const sourceMapLoader = config.module.rules.find(
// //     (rule) => rule.oneOf
// //   )?.oneOf?.find(
// //     (r) => r.enforce === 'pre' && r.use?.includes('source-map-loader')
// //   );

// //   if (sourceMapLoader) {
// //     sourceMapLoader.exclude = /node_modules/;
// //   }

// //   return config;
// // };

// module.exports = function override(config, env) {
//   const oneOfRule = config.module.rules.find((rule) => Array.isArray(rule.oneOf));

//   if (oneOfRule) {
//     oneOfRule.oneOf = oneOfRule.oneOf.map((rule) => {
//       if (
//         rule.enforce === 'pre' &&
//         rule.use &&
//         rule.use.includes('source-map-loader')
//       ) {
//         return {
//           ...rule,
//           exclude: /node_modules/,
//         };
//       }
//       return rule;
//     });
//   }

//   return config;
// };

// config-overrides.js
module.exports = function override(config, env) {
  const oneOfRule = config.module.rules.find((rule) => Array.isArray(rule.oneOf));

  if (oneOfRule) {
    oneOfRule.oneOf = oneOfRule.oneOf.map((rule) => {
      if (
        rule.enforce === 'pre' &&
        rule.use &&
        rule.use.includes('source-map-loader')
      ) {
        return {
          ...rule,
          exclude: /node_modules/,
        };
      }
      return rule;
    });
  }

  return config;
};
