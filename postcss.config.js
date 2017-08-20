const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: {
        'precss': {
            'parser': 'postcss-scss'
        },
        'autoprefixer': {}
    }
}