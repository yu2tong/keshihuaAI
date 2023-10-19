var page = Forguncy.Page;

setInterval(function () {
	var cellValue = Forguncy.FormatHelper.format("yyyy-MM-dd HH:mm", page.getCell("now").getValue()).text;
	var nowValue = Forguncy.FormatHelper.format("yyyy-MM-dd HH:mm", new Date(Date.now())).text;
	if (nowValue !== cellValue) {
		page.getCell("now").setValue(new Date(Date.now()));
	}
}, 1000);