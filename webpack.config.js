module.exports={
	mode:"development",
	entry:__dirname+"/app/index.jsx",
	output:{
		path:__dirname+"/app",
		filename:"bundle.js"
	},	
	devServer:{
		contentBase:"./app",
		inline:true,
		historyApiFallback: true
	},
    resolve:{
        extensions:['.js','.jsx']
    },	
	module:{
		rules:[
		    {test:/\.(jsx)$/,exclude:/node_modules/,loader:'babel-loader'}
		]
	}

}