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
/* global describe, it, document, beforeEach, riot */

'use strict';

const assert = require('assert');

describe('page riot', function () {
	beforeEach(function () {
		document.body.innerHTML = '';
	});
	it('mount', function () {
		let html = document.createElement('page');
		document.body.appendChild(html);
		let tag = riot.mount('page')[0];
		assert.equal(true, tag.isMounted);
	});
	it('url keyup', function () {

	});
	it('favorite click', function() {

	});
	it('favorite add', function() {

	});
	it('autologin', function() {

	});
});
