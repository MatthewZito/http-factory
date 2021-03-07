export default {
  'presets': [
    [
      '@babel/env',
      {
        'modules': false // rollup conf will handle this
      }
    ]
  ],
  'plugins': [
    ['@babel/plugin-transform-runtime', {
      'regenerator': true
    }]
  ]
}
