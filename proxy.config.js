const proxy = [
    {
      context: '/api',
      secure: false,
      changeOrigin: true,
      logLevel: "debug",
      target: 'https://academiadev-financeiro.herokuapp.com',
      // target: 'https://backendcombacon.herokuapp.com',
      // pathRewrite: {'/api/user' : '/user'}
      pathRewrite: {'^/api' : ''}
    }
  ];

module.exports = proxy;