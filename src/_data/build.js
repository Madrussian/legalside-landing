// preview = сборка под подпуть (github.io/<репо>/): закрываем от индексации, чтобы не плодить дубль legalside.ru
module.exports = { preview: (process.env.PATH_PREFIX || "/") !== "/" };
