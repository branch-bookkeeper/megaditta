const indentWidth = 4;

module.exports = {
    'extends': ['airbnb'],
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaVersion': 2017,
        'sourceType': 'module',
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true,
        },
    },
    'env': {
        'browser': true,
        'jest': true,
    },
    'plugins': [
        'react',
    ],
    'rules': {
        'indent': ['error', indentWidth, {
            'SwitchCase': 1,
            'VariableDeclarator': 1,
        }],
        'react/jsx-indent': ['error', indentWidth],
        'react/jsx-indent-props': ['error', indentWidth],
        'react/jsx-filename-extension': ['error', {
            'extensions': ['.js'],
        }],
        'valid-jsdoc': ['error', {
            'prefer': {
                'arg': 'param',
                'argument': 'param',
                'returns': 'return',
                'virtual': 'abstract',
            },
            'preferType': {
                'object': 'Object',
                'Number': 'number',
                'String': 'string',
                'Callback': 'Function',
                'boolean': 'Boolean',
                'Void': 'void',
            },
            'requireReturn': true,
            'requireReturnType': true,
            'requireParamDescription': false,
            'requireReturnDescription': false,
        }],
        'max-len': ['error', 120, 2, {
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': ['error', {'devDependencies': ['**/*.test.js', '**/*.stories.js', 'server/**/*.mjs']}],
        'import/no-named-default': 'off',
        'no-unused-expressions': ['error', { 'allowTaggedTemplates': true }],
        'jsx-a11y/anchor-is-valid': 'off',
    },
    'settings': {
        'import/resolver': {
            'node': {
                'extensions': ['.js', '.json', '.jsx'],
                'moduleDirectory' : ['node_modules', 'src']
            },
        },
    },
};
