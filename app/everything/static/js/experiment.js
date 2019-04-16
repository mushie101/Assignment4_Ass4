var a = [ [0, 0, 0.5, 0], [0.165, 0, 0, 0], [0, 0.165, 0, 0] ];

function makeRed(st, v)
{
	$("#v"+st+v).css("background-color", "red");
}

function nextStep (st)
{
	$("#nxt"+st).css("display", "none");
	$("#ansdiv").html("");
	st = String( Number(st) + 1 );
//	document.getElementById("chkbtn").onlick = "chekVal('" + st + "')";
	$("#chkbtn").attr("onclick", "checkVal('" + st + "')");
	$("#chkbtn").css("display", "block");
	$("#nxt").css("display", "none");
	for (var i = 0; i < 4; i++)
	{
		$("#bv" + st + i).css("display", "table-cell");
		$("#sp" + st + i).css("display", "none");
		console.log("bv"+st+i);
	}
}

function rightAns (st)
{
	$("#ansdiv").append("<h3 style='color:green'> Right Answer! </h3><br/><br/>");
	for (var i = 0; i < 4; i++)
	{
		$("#v"+st+i).css("background-color", "white");
		$("#bv"+st+i).html(a[st][i]);
	}
	$("#chkbtn").css("display", "none");
	if (st < 2)
		$("#btns").append("<button id='nxt" + st + "' onclick=\"nextStep('" + st + "')\"> Go to next step </button>");
	else
		$("#btns").append("<button id='pos' onclick=\"getPOS()\"> Get Parts of Speech </button>");
}

function getPOS()
{
	$("#pos").css("display", "none");
	$("#bv02").css("color", "green");
	$("#bv10").css("color", "green");
	$("#bv21").css("color", "green");
	$("#bv02").css("font-weight", "bold");
	$("#bv10").css("font-weight", "bold");
	$("#bv21").css("font-weight", "bold");
	$("#ansdiv").html("POS Tags for the words in the sentence are as following:<br/><div style='color:green; font-style:italic'><br/><p>'Book' is a verb</p><p>'a' is a determiner</p><p>'park' is a noun</p></div>");
}

function wrongAns (st)
{
	var ansnum = Number(st) + 1;
	$("#ansdiv").html("<h3 style='color:red'> Wrong Answer! </h3><br/><br/><button id='getA' onclick=\"getAns("+ ansnum +")\"> Get Answer </button><br/><br/>");
}

function getAns (st)
{
	$("#ans"+st).css("display", "block");
	$("#getA").html("Hide Answer");
	$("#getA").attr("onclick", "hideAns('" + st + "')");
}

function hideAns (st)
{
	$("#ans"+st).css("display", "none");
	$("#getA").html("Get Answer");
	$("#getA").attr("onclick", "getAns('" + st + "')");
}

function checkVal (st)
{
	$("#ansdiv").html("");
	for (var i = 1; i <= 3; i++)
		$("#ans"+i).css("display", "none");
	var v0 = document.getElementById("v"+st+"0").value;
	var v1 = document.getElementById("v"+st+"1").value;
	var v2 = document.getElementById("v"+st+"2").value;
	var v3 = document.getElementById("v"+st+"3").value;
	/*
	console.log(v0 != a00);
	console.log(v1);
	console.log(v2);
	console.log(v3);
	*/
	
	var fl = 1;
	if (v0 != a[st][0])
	{
		makeRed(st, "0");
		fl = 0;
	}
	if (v1 != a[st][1])
	{
		makeRed(st, "1");
		fl = 0;
	}
	if (v2 != a[st][2])
	{
		makeRed(st, "2");
		fl = 0;
	}
	if (v3 != a[st][3])
	{
		makeRed(st, "3");
		fl = 0;
	}
//	checkAnswer (st);
	if (fl == 1)
	{
		rightAns(st);
//		nextStep (st);
	}
	else
	{
		wrongAns(st);
//		getAns(st);
	}
}
