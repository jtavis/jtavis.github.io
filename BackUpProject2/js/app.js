$(document).ready(function(){
	var counter = 0;

	$('#a1,#a2,#a3,#b1,#b2,#b3,#c1,#c2,#c3').click(function(){
		
		if ($(this).text()!="X"
			&&$(this).text()!="O"
			&&$('#output').text()=="")
			{
			counter++;
			if (counter%2==0) {
				$(this).html("X");
				$(this).css('background-color', 'blue');
				$(this).css('color', 'white');
				bingo();
				
			}
			else {
				$(this).html("O");
				$(this).css('background-color', 'white');
				$(this).css('color', 'blue');
				bingo();
			}
		}
		else {

		}

	});

	$('#new').click(function(){
		counter = 0;
		$('.row div').html('');
		$('#output').html('');
		$('.row div').css('background-color','white');
	});

	function bingo () {
		if (
			($('#a1').text()=='X'&&
			$('#a2').text()=='X'&&
			$('#a3').text()=='X')||
			($('#a1').text()=='X'&&
			$('#b2').text()=='X'&&
			$('#c3').text()=='X')||
			($('#a1').text()=='X'&&
			$('#b1').text()=='X'&&
			$('#c1').text()=='X')||
			($('#b1').text()=='X'&&
			$('#b2').text()=='X'&&
			$('#b3').text()=='X')||
			($('#c1').text()=='X'&&
			$('#c2').text()=='X'&&
			$('#c3').text()=='X')||
			($('#a2').text()=='X'&&
			$('#b2').text()=='X'&&
			$('#c2').text()=='X')||
			($('#a3').text()=='X'&&
			$('#b3').text()=='X'&&
			$('#c3').text()=='X')||
			($('#c1').text()=='X'&&
			$('#b2').text()=='X'&&
			$('#a3').text()=='X'))
		{
			$('#output').html('X is the winner!');
		}
		else if (
			($('#a1').text()=='O'&&
			$('#a2').text()=='O'&&
			$('#a3').text()=='O')||
			($('#a1').text()=='O'&&
			$('#b2').text()=='O'&&
			$('#c3').text()=='O')||
			($('#a1').text()=='O'&&
			$('#b1').text()=='O'&&
			$('#c1').text()=='O')||
			($('#b1').text()=='O'&&
			$('#b2').text()=='O'&&
			$('#b3').text()=='O')||
			($('#c1').text()=='O'&&
			$('#c2').text()=='O'&&
			$('#c3').text()=='O')||
			($('#a2').text()=='O'&&
			$('#b2').text()=='O'&&
			$('#c2').text()=='O')||
			($('#a3').text()=='O'&&
			$('#b3').text()=='O'&&
			$('#c3').text()=='O')||
			($('#c1').text()=='O'&&
			$('#b2').text()=='O'&&
			$('#a3').text()=='O'))
		{
			$('#output').html('O is the winner!');
		}
		else if (
			$('#a1').text()!=""&&
			$('#a2').text()!=""&&
			$('#a3').text()!=""&&
			$('#b1').text()!=""&&
			$('#b2').text()!=""&&
			$('#b3').text()!=""&&
			$('#c1').text()!=""&&
			$('#c2').text()!=""&&
			$('#c3').text()!=""
			){
			$('#output').html('Draw!');
		}
		else {

		}
	}

});
