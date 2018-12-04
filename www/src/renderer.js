import React from 'react';
import ReactDOM from 'react-dom';
import MainRouter from './modules/MainRouter';

// eslint-disable-next-line no-undef
ReactDOM.render(<MainRouter />, document.getElementById('app-root'));

Bridge.assembly("bridgedotnet", function ($asm, globals) {
    "use strict";

    Bridge.define("bridgedotnet.App", {
        main: function Main () {
            System.Console.WriteLine("Welcome to Bridge.NETCOOL");

        }
    });
});