function showStuff(id) {
	var divid = document.getElementById(id);
	var divs = document.getElementsByClassName("bibl");
	for(var i=0;i<divs.length;i++) {
		divs[i].style.display = "none";
	}
	divid.style.display = "block";
}

function get_artj() {
	var authorname = document.getElementById('artj_authorname').value;
	if (authorname.slice(-1) != '.') {
		authorname = authorname.charAt(0) + '.';
	}
	var authorsname = document.getElementById('artj_authorsname').value;
	if (authorsname.slice(-1) != '.') {
		authorsname = authorsname.charAt(0) + '.';
	}
	var author = document.getElementById('artj_author').value;
	var authors = document.getElementById('artj_authors').value;
	if (authors.search(/./i) != -1) {
		authors = ', ' + authors;
	}
	var header1 = document.getElementById('artj_name').value;
	var journal = document.getElementById('artj_bname').value;
	var year = document.getElementById('artj_year').value;
	var num = document.getElementById('artj_num').value;
	var pages = document.getElementById('artj_pages').value;
	var bibl = author + ', ' + authorname + ' ' + authorsname + ' ' + header1 + ' / ' + authorname + ' ' + authorsname + ' ' + author + authors + ' // ' + journal + '. &ndash; ' + year + '. &ndash; № ' + num + '. &ndash; C. ' + pages + '.';
	document.getElementById('txt_artj').innerHTML = bibl;
}

function get_artb() {
	var authorname = document.getElementById('artb_authorname').value;
	if (authorname.slice(-1) != '.') {
		authorname = authorname.charAt(0) + '.';
	}
	var authorsname = document.getElementById('artb_authorsname').value;
	if (authorsname.slice(-1) != '.') {
		authorsname = authorsname.charAt(0) + '.';
	}
	var author = document.getElementById('artb_author').value;
	var authors = document.getElementById('artb_authors').value;
	if (authors.search(/./i) != -1) {
		authors = ', ' + authors;
	}
	var header1 = document.getElementById('artb_name').value;
	var book = document.getElementById('artb_bname').value;
	var sved = document.getElementById('artb_sved').value;
	if (sved.search(/./i) != -1) {
		sved = ' : ' + sved;
	}
	var city = document.getElementById('artb_city').value;
	if ((city == 'Москва') || (city == 'М')) {
		city = 'М.';
	}
	if ((city == 'Санкт-Петербург') || (city == 'СПб')) {
		city = 'СПб.';
	}	
	var year = document.getElementById('artb_year').value;
	var pages = document.getElementById('artb_pages').value;
	var bibl = author + ', ' + authorname + ' ' + authorsname + ' ' + header1 + ' / ' + authorname + ' ' + authorsname + ' ' + author + authors + ' // ' + book + sved + '. &ndash; ' + city + ', ' + year + '. &ndash; C. ' + pages + '.';
	document.getElementById('txt_artb').innerHTML = bibl;
}

function get_book() {
var authorname = document.getElementById('book_authorname').value;
	if (authorname.slice(-1) != '.') {
		authorname = authorname.charAt(0) + '.';
	}
	var authorsname = document.getElementById('book_authorsname').value;
	if (authorsname.slice(-1) != '.') {
		authorsname = authorsname.charAt(0) + '.';
	}
	var author = document.getElementById('book_author').value;
	var authors = document.getElementById('book_authors').value;
	if (authors.search(/./i) != -1) {
		authors = ', ' + authors;
	}
	var book = document.getElementById('book_book').value;
	var sved = document.getElementById('book_sved').value;
	if (sved.search(/./i) != -1) {
		sved = ' : ' + sved;
	}
	var city = document.getElementById('book_city').value;
	if ((city == 'Москва') || (city == 'М')) {
		city = 'М.';
	}
	if ((city == 'Санкт-Петербург') || (city == 'СПб')) {
		city = 'СПб.';
	}	
	var org = document.getElementById('book_org').value;
	var year = document.getElementById('book_year').value;
	var pages = document.getElementById('book_pages').value;
	var bibl = author + ', ' + authorname + ' ' + authorsname + ' ' + book + sved + ' / ' + authorname + ' ' + authorsname + ' ' + author + authors + '. &ndash; ' + city + ' : ' + org + ', ' + year + '. &ndash; ' + pages + ' с.';
	document.getElementById('txt_book').innerHTML = bibl;
}

window.onclick = function onclickRadio() {
	var nameRadio = document.getElementsByName('nameRadio');
	var nameaRadio = document.getElementsByName('nameaRadio');
	for (var i = 0; i < nameRadio.length; i++) {
   if (nameRadio[i].type === 'radio' && nameRadio[i].checked) {
        diss_sved = nameRadio[i].value;
	}
}
document.getElementById('diss_sved').innerHTML = diss_sved;
for (var i = 0; i < nameaRadio.length; i++) {
   if (nameaRadio[i].type === 'radio' && nameaRadio[i].checked) {
        auto_sved = nameaRadio[i].value;
	}
}
document.getElementById('auto_sved').innerHTML = auto_sved;
 }

function get_diss() {
	var authorname = document.getElementById('diss_authorname').value;
	if (authorname.slice(-1) != '.') {
		authorname1 = authorname.charAt(0) + '.';
	}
	var authorsname = document.getElementById('diss_authorsname').value;
	if (authorsname.slice(-1) != '.') {
		authorsname1 = authorsname.charAt(0) + '.';
	}
	var author = document.getElementById('diss_author').value;
	var header = document.getElementById('diss_name').value;
	//var sved = document.getElementById('diss_sved').value;
	var city = document.getElementById('diss_city').value;
	if ((city == 'Москва') || (city == 'М')) {
		city = 'М.';
	}
	if ((city == 'Санкт-Петербург') || (city == 'СПб')) {
		city = 'СПб.';
	}
	var since = document.getElementById('diss_since').value;
	if ((since == 'техническ') || (since == 'техническая') || (since == 'технических') || (since == 'техн')) {
		since = 'техн.';
	}
	if ((since == 'эконом') || (since == 'экономическая') || (since == 'экономических') || (since == 'экон')) {
		since = 'экон.';
	}
	if ((since == 'физико') || (since == 'физико-математическая') || (since == 'физико-математических') || (since == 'физ') || (since == 'физ.-мат')) {
		since = 'физ.-мат.';
	}
	if ((since == 'юрид') || (since == 'юридическая') || (since == 'юридических') || (since == 'юрид')) {
		since = 'юрид.';
	}
	var shifr = document.getElementById('diss_shifr').value;
	var year = document.getElementById('diss_year').value;
	var pages = document.getElementById('diss_pages').value;
	var bibl = author + ', ' + authorname1 + ' ' + authorsname1 + ' ' + header + ' : дисс. ... ' + diss_sved + since + ' наук : ' + shifr + ' / ' + author + ' ' + authorname + ' ' + authorsname + '. &ndash; ' + city + ', ' + year + '. &ndash; ' + pages + ' c.';
	document.getElementById('txt_diss').innerHTML = bibl;
}

function get_auto() {
	var authorname = document.getElementById('auto_authorname').value;
	if (authorname.slice(-1) != '.') {
		authorname1 = authorname.charAt(0) + '.';
	}
	var authorsname = document.getElementById('auto_authorsname').value;
	if (authorsname.slice(-1) != '.') {
		authorsname1 = authorsname.charAt(0) + '.';
	}
	var author = document.getElementById('auto_author').value;
	var header = document.getElementById('auto_name').value;
	//var sved = document.getElementById('diss_sved').value;
	var city = document.getElementById('auto_city').value;
	if ((city == 'Москва') || (city == 'М')) {
		city = 'М.';
	}
	if ((city == 'Санкт-Петербург') || (city == 'СПб')) {
		city = 'СПб.';
	}
	var since = document.getElementById('auto_since').value;
	if ((since == 'техническ') || (since == 'техническая') || (since == 'технических') || (since == 'техн')) {
		since = 'техн.';
	}
	if ((since == 'эконом') || (since == 'экономическая') || (since == 'экономических') || (since == 'экон')) {
		since = 'экон.';
	}
	if ((since == 'физико') || (since == 'физико-математическая') || (since == 'физико-математических') || (since == 'физ') || (since == 'физ.-мат')) {
		since = 'физ.-мат.';
	}
	if ((since == 'юрид') || (since == 'юридическая') || (since == 'юридических') || (since == 'юрид')) {
		since = 'юрид.';
	}
	var shifr = document.getElementById('auto_shifr').value;
	var year = document.getElementById('auto_year').value;
	var pages = document.getElementById('auto_pages').value;
	var bibl = author + ', ' + authorname1 + ' ' + authorsname1 + ' ' + header + ' : авторев. дисс. ... ' + auto_sved + since + ' наук : ' + shifr + ' / ' + author + ' ' + authorname + ' ' + authorsname + '. &ndash; ' + city + ', ' + year + '. &ndash; ' + pages + ' c.';
	document.getElementById('txt_auto').innerHTML = bibl;
}

function get_law() {
	var book = document.getElementById('law_book').value;
	var sved = document.getElementById('law_sved').value;
	if (sved.search(/./i) != -1) {
		sved = ' : ' + sved;
	}
	var city = document.getElementById('law_city').value;
	if ((city == 'Москва') || (city == 'М')) {
		city = 'М.';
	}
	if ((city == 'Санкт-Петербург') || (city == 'СПб')) {
		city = 'СПб.';
	}	
	var org = document.getElementById('law_org').value;
	var year = document.getElementById('law_year').value;
	var pages = document.getElementById('law_pages').value;
	var bibl = book + sved + '. &ndash; ' + city + ' : ' + org + ', ' + year + '. &ndash; ' + pages + ' с.';
	document.getElementById('txt_law').innerHTML = bibl;
}

function get_tech() {
	var book = document.getElementById('tech_book').value;
	var sved = document.getElementById('tech_sved').value;
	if (sved.search(/./i) != -1) {
		sved = ' : ' + sved;
	}
	var city = document.getElementById('tech_city').value;
	if ((city == 'Москва') || (city == 'М')) {
		city = 'М.';
	}
	if ((city == 'Санкт-Петербург') || (city == 'СПб')) {
		city = 'СПб.';
	}	
	var org = document.getElementById('tech_org').value;
	var year = document.getElementById('tech_year').value;
	var pages = document.getElementById('tech_pages').value;
	var bibl = book + sved + '. &ndash; ' + city + ' : ' + org + ', ' + year + '. &ndash; ' + pages + ' с.';
	document.getElementById('txt_tech').innerHTML = bibl;
}

function get_web() {
	var header1 = document.getElementById('web_header1').value;
	var site = document.getElementById('web_site').value;
	if (site.slice(-1) != '.') {
		site = site + '.';
	}	
	var url = document.getElementById('web_url').value;
	var date = new Date();
	var day = date.getUTCDate().toString();
	var month = (date.getUTCMonth()+1).toString();
	if (month.length == 1) {
		month = '0'+month;
	}
	var year = date.getUTCFullYear().toString();
	//var accessDate = '(дата обращения: ' + '.' + month + '.' year + ')';
	var bibl = header1 + ' // ' + site + ' URL: ' + url + ' (дата обращения: ' + day + '.' + month + '.' + year + ').';
	document.getElementById('txt_web').innerHTML = bibl;
}