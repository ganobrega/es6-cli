#!/usr/bin/env node

if(process.env.NODE_ENV !== 'production'){
    console.log('Running in development');
    require("@babel/register");
    require('../src/cli.js');
}else{
    console.log('Running in production');
    require('../dist/cli.js');
}