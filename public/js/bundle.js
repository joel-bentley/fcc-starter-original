/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/js";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("__webpack_require__(2);\n__webpack_require__(4);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9tYWluLmpzPzZhNGIiXSwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnLi9jbGlja0NvbnRyb2xsZXInKTtcbnJlcXVpcmUoJy4vdXNlckNvbnRyb2xsZXInKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL21haW4uanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("var ajaxFunctions = __webpack_require__(3).ajaxFunctions;\nvar appUrl = __webpack_require__(3).appUrl;\n\nvar addButton = document.querySelector('.btn-add');\nvar deleteButton = document.querySelector('.btn-delete');\nvar clickNbr = document.querySelector('#click-nbr');\nvar apiUrl = appUrl + '/api/:id/clicks';\n\nfunction updateClickCount(data) {\n   var clicksObject = JSON.parse(data);\n   clickNbr.innerHTML = clicksObject.clicks;\n}\n\najaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount));\n\naddButton.addEventListener('click', function() {\n\n   ajaxFunctions.ajaxRequest('POST', apiUrl, function() {\n      ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount);\n   });\n\n}, false);\n\ndeleteButton.addEventListener('click', function() {\n\n   ajaxFunctions.ajaxRequest('DELETE', apiUrl, function() {\n      ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount);\n   });\n\n}, false);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9jbGlja0NvbnRyb2xsZXIuanM/MmY4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYWpheEZ1bmN0aW9ucyA9IHJlcXVpcmUoJy4vYWpheC1mdW5jdGlvbnMnKS5hamF4RnVuY3Rpb25zO1xudmFyIGFwcFVybCA9IHJlcXVpcmUoJy4vYWpheC1mdW5jdGlvbnMnKS5hcHBVcmw7XG5cbnZhciBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWFkZCcpO1xudmFyIGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tZGVsZXRlJyk7XG52YXIgY2xpY2tOYnIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xpY2stbmJyJyk7XG52YXIgYXBpVXJsID0gYXBwVXJsICsgJy9hcGkvOmlkL2NsaWNrcyc7XG5cbmZ1bmN0aW9uIHVwZGF0ZUNsaWNrQ291bnQoZGF0YSkge1xuICAgdmFyIGNsaWNrc09iamVjdCA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICBjbGlja05ici5pbm5lckhUTUwgPSBjbGlja3NPYmplY3QuY2xpY2tzO1xufVxuXG5hamF4RnVuY3Rpb25zLnJlYWR5KGFqYXhGdW5jdGlvbnMuYWpheFJlcXVlc3QoJ0dFVCcsIGFwaVVybCwgdXBkYXRlQ2xpY2tDb3VudCkpO1xuXG5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblxuICAgYWpheEZ1bmN0aW9ucy5hamF4UmVxdWVzdCgnUE9TVCcsIGFwaVVybCwgZnVuY3Rpb24oKSB7XG4gICAgICBhamF4RnVuY3Rpb25zLmFqYXhSZXF1ZXN0KCdHRVQnLCBhcGlVcmwsIHVwZGF0ZUNsaWNrQ291bnQpO1xuICAgfSk7XG5cbn0sIGZhbHNlKTtcblxuZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cbiAgIGFqYXhGdW5jdGlvbnMuYWpheFJlcXVlc3QoJ0RFTEVURScsIGFwaVVybCwgZnVuY3Rpb24oKSB7XG4gICAgICBhamF4RnVuY3Rpb25zLmFqYXhSZXF1ZXN0KCdHRVQnLCBhcGlVcmwsIHVwZGF0ZUNsaWNrQ291bnQpO1xuICAgfSk7XG5cbn0sIGZhbHNlKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NsaWNrQ29udHJvbGxlci5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("exports.appUrl = window.location.origin;\n\nexports.ajaxFunctions = {\n   ready: function ready(fn) {\n      if (typeof fn !== 'function') {\n         return;\n      }\n\n      if (document.readyState === 'complete') {\n         return fn();\n      }\n\n      document.addEventListener('DOMContentLoaded', fn, false);\n   },\n   ajaxRequest: function ajaxRequest(method, url, callback) {\n      var xmlhttp = new XMLHttpRequest();\n\n      xmlhttp.onreadystatechange = function() {\n         if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {\n            callback(xmlhttp.response);\n         }\n      };\n\n      xmlhttp.open(method, url, true);\n      xmlhttp.send();\n   }\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9hamF4LWZ1bmN0aW9ucy5qcz8zMjVlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMuYXBwVXJsID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbjtcblxuZXhwb3J0cy5hamF4RnVuY3Rpb25zID0ge1xuICAgcmVhZHk6IGZ1bmN0aW9uIHJlYWR5KGZuKSB7XG4gICAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICByZXR1cm4gZm4oKTtcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZuLCBmYWxzZSk7XG4gICB9LFxuICAgYWpheFJlcXVlc3Q6IGZ1bmN0aW9uIGFqYXhSZXF1ZXN0KG1ldGhvZCwgdXJsLCBjYWxsYmFjaykge1xuICAgICAgdmFyIHhtbGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgeG1saHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgIGlmICh4bWxodHRwLnJlYWR5U3RhdGUgPT09IDQgJiYgeG1saHR0cC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgY2FsbGJhY2soeG1saHR0cC5yZXNwb25zZSk7XG4gICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB4bWxodHRwLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuICAgICAgeG1saHR0cC5zZW5kKCk7XG4gICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvYWpheC1mdW5jdGlvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	eval("var ajaxFunctions = __webpack_require__(3).ajaxFunctions;\nvar appUrl = __webpack_require__(3).appUrl;\n\nvar profileId = document.querySelector('#profile-id') || null;\nvar profileUsername = document.querySelector('#profile-username') || null;\nvar profileRepos = document.querySelector('#profile-repos') || null;\nvar displayName = document.querySelector('#display-name');\nvar apiUrl = appUrl + '/api/:id';\n\nfunction updateHtmlElement(data, element, userProperty) {\n   element.innerHTML = data[userProperty];\n}\n\najaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, function(data) {\n   var userObject = JSON.parse(data);\n\n   if (userObject.displayName !== null) {\n      updateHtmlElement(userObject, displayName, 'displayName');\n   }\n   else {\n      updateHtmlElement(userObject, displayName, 'username');\n   }\n\n   if (profileId !== null) {\n      updateHtmlElement(userObject, profileId, 'id');\n   }\n\n   if (profileUsername !== null) {\n      updateHtmlElement(userObject, profileUsername, 'username');\n   }\n\n   if (profileRepos !== null) {\n      updateHtmlElement(userObject, profileRepos, 'publicRepos');\n   }\n\n}));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC91c2VyQ29udHJvbGxlci5qcz81NjdhIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBhamF4RnVuY3Rpb25zID0gcmVxdWlyZSgnLi9hamF4LWZ1bmN0aW9ucycpLmFqYXhGdW5jdGlvbnM7XG52YXIgYXBwVXJsID0gcmVxdWlyZSgnLi9hamF4LWZ1bmN0aW9ucycpLmFwcFVybDtcblxudmFyIHByb2ZpbGVJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9maWxlLWlkJykgfHwgbnVsbDtcbnZhciBwcm9maWxlVXNlcm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZmlsZS11c2VybmFtZScpIHx8IG51bGw7XG52YXIgcHJvZmlsZVJlcG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2ZpbGUtcmVwb3MnKSB8fCBudWxsO1xudmFyIGRpc3BsYXlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rpc3BsYXktbmFtZScpO1xudmFyIGFwaVVybCA9IGFwcFVybCArICcvYXBpLzppZCc7XG5cbmZ1bmN0aW9uIHVwZGF0ZUh0bWxFbGVtZW50KGRhdGEsIGVsZW1lbnQsIHVzZXJQcm9wZXJ0eSkge1xuICAgZWxlbWVudC5pbm5lckhUTUwgPSBkYXRhW3VzZXJQcm9wZXJ0eV07XG59XG5cbmFqYXhGdW5jdGlvbnMucmVhZHkoYWpheEZ1bmN0aW9ucy5hamF4UmVxdWVzdCgnR0VUJywgYXBpVXJsLCBmdW5jdGlvbihkYXRhKSB7XG4gICB2YXIgdXNlck9iamVjdCA9IEpTT04ucGFyc2UoZGF0YSk7XG5cbiAgIGlmICh1c2VyT2JqZWN0LmRpc3BsYXlOYW1lICE9PSBudWxsKSB7XG4gICAgICB1cGRhdGVIdG1sRWxlbWVudCh1c2VyT2JqZWN0LCBkaXNwbGF5TmFtZSwgJ2Rpc3BsYXlOYW1lJyk7XG4gICB9XG4gICBlbHNlIHtcbiAgICAgIHVwZGF0ZUh0bWxFbGVtZW50KHVzZXJPYmplY3QsIGRpc3BsYXlOYW1lLCAndXNlcm5hbWUnKTtcbiAgIH1cblxuICAgaWYgKHByb2ZpbGVJZCAhPT0gbnVsbCkge1xuICAgICAgdXBkYXRlSHRtbEVsZW1lbnQodXNlck9iamVjdCwgcHJvZmlsZUlkLCAnaWQnKTtcbiAgIH1cblxuICAgaWYgKHByb2ZpbGVVc2VybmFtZSAhPT0gbnVsbCkge1xuICAgICAgdXBkYXRlSHRtbEVsZW1lbnQodXNlck9iamVjdCwgcHJvZmlsZVVzZXJuYW1lLCAndXNlcm5hbWUnKTtcbiAgIH1cblxuICAgaWYgKHByb2ZpbGVSZXBvcyAhPT0gbnVsbCkge1xuICAgICAgdXBkYXRlSHRtbEVsZW1lbnQodXNlck9iamVjdCwgcHJvZmlsZVJlcG9zLCAncHVibGljUmVwb3MnKTtcbiAgIH1cblxufSkpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvdXNlckNvbnRyb2xsZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);