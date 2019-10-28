function mulai_animasi(){
	var kordinat = {
		x:0,
		y:400
	};
	var RadiusBola = 5;
	var v = document.getElementById("v0").value;
	var sudut_elevasi = document.getElementById("teta").value;
	var motionspeed= document.getElementById("motionspeed").value;
	var canvas = document.getElementById('hikennoace');
	var context = canvas.getContext('2d');
	var waktu = 0;
	var v0x = v * Math.cos(sudut_elevasi * Math.PI/180);
	var v0y = v * Math.sin(sudut_elevasi * Math.PI/180);
	var x0 = kordinat.x;
	var y0 = kordinat.y;
	var g = 9.8;
	
	setInterval(function(){
		context.clearRect(0, 0, 910,400 );
		if(kordinat.y<=canvas.height && kordinat.x <=canvas.width){
			kordinat.y = y0 - ( v0y * waktu - (1/2 * g * Math.pow(waktu,2)) );
			kordinat.x = x0 + v0x * waktu;
		}
		context.beginPath();
		context.fillStyle = "rgba(2000, 0, 0, 3)";//set warna bola
		context.arc(kordinat.x,kordinat.y,RadiusBola,0,Math.PI*2,false);
		context.fill();
		context.stroke();
		waktu+=0.1;
	}, 1000 / motionspeed);	
}

function lintasan_animasi(){
	var kordinat = {
		x:0,
		y:400
	};
	var RadiusBola = 5;
	var v = document.getElementById("v0").value;
	var sudut_elevasi = document.getElementById("teta").value;
	var motionspeed= document.getElementById("motionspeed").value;
	var pathspeed=1000/motionspeed*6;
	var canvas = document.getElementById('hikennoace');
	var context = canvas.getContext('2d');
	var waktu = 0;
	var v0x = v * Math.cos(sudut_elevasi * Math.PI/180);
	var v0y = v * Math.sin(sudut_elevasi * Math.PI/180);
	var x0 = kordinat.x;
	var y0 = kordinat.y;
	var g = 9.8;
	setInterval(function(){
		//context.clearRect(0, 0, 910,400 );
		if(kordinat.y<=canvas.height && kordinat.x <= canvas.width){
			kordinat.y = y0 - ( v0y * waktu - (1/2 * g * Math.pow(waktu,2)) );
			kordinat.x = x0 + v0x * waktu;
		}
		context.beginPath();
		context.fillStyle = "rgba(2000, 0, 0, 3)";//set warna bola
		context.arc(kordinat.x,kordinat.y,RadiusBola,0,Math.PI*2,false);
		context.fill();
		context.stroke();
		waktu+=0.6;
	}, pathspeed);	
}

function hitung(){
	var g = 9.8;
	var v = document.getElementById("v0").value;
	var sudut_elevasi = document.getElementById("teta").value;
	var v0x = v * Math.cos(sudut_elevasi * Math.PI/180);
	var v0y = v * Math.sin(sudut_elevasi * Math.PI/180);
	var t_Xmax = 2*v0y/g;
	var t_Hmax = v0y/g;
	var h_max = (v0y*v0y)/(2*g);
	var x_max = v0x*t_Xmax;
	a1.innerHTML = Math.abs(v0x.toFixed(2));
	b2.innerHTML = Math.abs(v0y.toFixed(2));
	c3.innerHTML = Math.abs(t_Xmax.toFixed(2));
	d4.innerHTML = Math.abs(t_Hmax.toFixed(2));
	e5.innerHTML = Math.abs(h_max.toFixed(2));
	f6.innerHTML = Math.abs(x_max.toFixed(2));
}

		
	