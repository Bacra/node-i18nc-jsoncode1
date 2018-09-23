module.exports =
{
	parser: 'babel-eslint',
	extends: 'eslint-config-brcjs',
	env: {es6: true},
	rules:
	{
		'generator-star-spacing': 0,	// allow async-await
		'no-const-assign': 2,			//禁止修改const声明的变量
		'no-var': 2,
	},
};
