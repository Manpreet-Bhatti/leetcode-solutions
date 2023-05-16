/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
    let uniqueEmails = new Set();
    for (let i = 0; i < emails.length; i++) {
        let email = emails[i];
        let atIndex = email.indexOf('@');
        let localName = email.substring(0, atIndex);
        let domainName = email.substring(atIndex);
        let plusIndex = localName.indexOf('+');
        if (plusIndex > -1) {
            localName = localName.substring(0, plusIndex);
        }
        localName = localName.replace(/\./g, '');
        uniqueEmails.add(localName + domainName);
    }
    return uniqueEmails.size;
};