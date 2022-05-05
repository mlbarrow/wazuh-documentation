let url;
switch (document.location.protocol) {
  case 'http':
  case 'https':
    url = document.location.protocol + '//' + document.location.host;
    break;
  default:
    url = 'https://documentation.wazuh.com';
}
document.location = url + '/current/index.html';
