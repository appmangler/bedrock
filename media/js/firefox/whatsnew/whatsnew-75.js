/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// create namespace
if (typeof window.Mozilla === 'undefined') {
    window.Mozilla = {};
}

(function(Mozilla) {
    'use strict';

    var client = Mozilla.Client;

    // bug 1419573 - only show "Your Firefox is up to date" if it's the latest version.
    if (client.isFirefoxDesktop) {
        client.getFirefoxDetails(function(data) {
            if (data.isUpToDate) {
                document.querySelector('.main-header').classList.add('show-up-to-date-message');
            }
        });
    }

    client.getFxaDetails(function(details) {
        if (details.setup) {
            document.querySelector('.content-wrapper').classList.add('state-is-signed-in');
        }
    });

})(window.Mozilla);
