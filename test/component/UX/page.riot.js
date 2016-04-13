/*
Copyright (C) 2016
Emmanuel ROECKER and Rym BOUCHAGOUR
http://dev.glicer.com

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
*/
/* global describe, it, document, beforeEach */

'use strict';

const assert = require('assert');
const fs = require('fs');
const riot = require('riot');

/*
const autologinClass = require('../../../component/autologin/autologin.js');

describe('autologin riot', function () {
	beforeEach(function () {
		document.body.innerHTML = '';
	});
	it('compile', function () {
		let autologinTag = fs.readFileSync('./component/UX/autologin.riot.tag', 'utf8');
		assert.equal('autologin', eval(riot.compile(autologinTag)));
	});
	it('mount', function () {
		let autologinTag = fs.readFileSync('./component/UX/autologin.riot.tag', 'utf8');
		eval(riot.compile(autologinTag));
		let html = document.createElement('autologin');
		document.body.appendChild(html);
		let tag = riot.mount('autologin')[0];
		assert.equal(true, tag.isMounted);
	});
	it('autologin bad enter', function () {
		let autologin = new autologinClass('./test/data/autologin/autologin.yml', './test/data/autologin');
		let autologinTag = fs.readFileSync('./component/UX/autologin.riot.tag', 'utf8');
		eval(riot.compile(autologinTag));
		let html = document.createElement('autologin');
		document.body.appendChild(html);
		riot.mount('autologin')[0];
	});
	it('autologin ok enter', function () {
		let autologin = new autologinClass('./test/data/autologin/autologin.yml', './test/data/autologin');
		let autologinTag = fs.readFileSync('./component/UX/autologin.riot.tag', 'utf8');
		eval(riot.compile(autologinTag));
		let html = document.createElement('autologin');
		document.body.appendChild(html);
		riot.mount('autologin')[0];
	});
});
*/
