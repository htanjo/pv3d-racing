var AC_FL_RunContent = 0;
var DetectFlashVer = 0;

// -----------------------------------------------------------------------------
// グローバル
// Flash のメジャーバージョンが必要です
var requiredMajorVersion = 9;
// Flash のマイナーバージョンが必要です
var requiredMinorVersion = 0;
// 必要な Flash のバージョン
var requiredRevision = 124;
// -----------------------------------------------------------------------------

function insertFlash(src, width, height, quality, bgcolor)
{
	if (AC_FL_RunContent == 0 || DetectFlashVer == 0)
	{
		alert("このページでは \"AC_RunActiveContent.js\" が必要です。");
	}
	else
	{
		var hasRightVersion = DetectFlashVer(requiredMajorVersion, requiredMinorVersion, requiredRevision);
		if (hasRightVersion)
		{	// 使用可能なバージョンが検出された場合
			// Flash ムービーの埋め込み
			AC_FL_RunContent(
				'codebase', 'http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0',
				'width', width,
				'height', height,
				'src', src,
				'quality', quality,
				'pluginspage', 'http://get.adobe.com/flashplayer/',
				'align', 'middle',
				'play', 'true',
				'loop', 'true',
				'scale', 'showall',
				'wmode', 'opaque',
				'devicefont', 'false',
				'id', src,
				'bgcolor', bgcolor,
				'name', src,
				'menu', 'false',
				'allowScriptAccess','sameDomain',
				'allowFullScreen','false',
				'movie', src,
				'salign', ''
				); //end AC code
		}
		else
		{	// Flash が古すぎるか、プラグインを検出できません
			var alternateContent = "<h1 id=\"dummyImage\"><img src=\"images/start.jpg\" alt=\"PV3D RACING\" width=\"640\" height=\"360\"></h1>"
				+ "<p id=\"note\">インストールされた Flash Player が古すぎるか、プラグインを検出できません。<br>"
				+ "このコンテンツの再生には最新の Adobe Flash Player が必要です。<br>"
				+ "&raquo; <a href=\"http://get.adobe.com/flashplayer/\">Flash Player を入手</a></p>";
			document.write(alternateContent);  // Flash 以外のコンテンツを挿入する
		}
	}
}
