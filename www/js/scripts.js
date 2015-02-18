'use strict';
// function getPhoneGapPath() {
//     var path = window.location.pathname;
//     path = path.substr( path, path.length - 10 );
//     return path.substr(0, 19);
//     // return 'file://' + path;
// };

function getPhoneGapPath() {
    var path = window.location.pathname;
    var phoneGapPath = path.substring(0, path.lastIndexOf('/') + 1);
    return phoneGapPath;
}

// Wait for device API libraries to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// Audio player
//
var my_media = null;
var my_media2 = null;
var mediaTimer = null;

// Play audio
//
function playAudioFundo(src) {
    // Create Media object from src
    my_media2 = new Media(src, onSuccess, onError);

    // Play audio
    my_media2.play();
    my_media2.setVolume('0.2')
    
}

function playAudio(src) {
    // Create Media object from src
    my_media = new Media(src, onSuccess, onError);

    // Play audio
    my_media.play();
}

// Pause audio
//
function pauseAudio() {
    if (my_media) {
        my_media.pause();
    }
}

// Stop audio
//
function stopAudio() {
    if (my_media) {
        my_media.stop();
    }
    clearInterval(mediaTimer);
    mediaTimer = null;
}

// onSuccess Callback
//
function onSuccess() {
    console.log("playAudio():Audio Success");
}

// onError Callback
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

var topMeio = function(){
	var element = $('#containerFullLivro');
	var alturaTela = $(window).height();
	var elementHeight = element.children('.contentPages').height();
	var elementHeightFotter = element.children('.footerNavMenu').height();
	element.css({
		'marginTop': (alturaTela / 2) - (elementHeight / 2) - (elementHeightFotter / 2) +'px'
	});
};

var livro = {

	playNarracao: function(){
		var narracaoFull = $('.narracao');
		narracaoFull.on('click', function(){
			var id = $(this).attr('id');
			
			if($(this).attr('class') == 'narracao play pulse-slow'){
				$(this).removeClass('pulse-slow play');	
				if(id == 'pagina1'){
					playAudio(getPhoneGapPath()+"media/page1.mp3");
					setTimeout(function(){
						narracaoFull.addClass('play pulse-slow');
					}, 10000);
				}else if(id == 'paginaIndex2'){
					playAudio(getPhoneGapPath()+"media/pageIndex2.mp3");
					setTimeout(function(){
						narracaoFull.addClass('play pulse-slow');
					}, 3000);
				}else if(id == 'paginaIndex3'){
					playAudio(getPhoneGapPath()+"media/pageIndex3.mp3");
					setTimeout(function(){
						narracaoFull.addClass('play pulse-slow');
					}, 8500);
				}else if(id == 'pagina2'){
					playAudio(getPhoneGapPath()+"media/page2.mp3");
					setTimeout(function(){
						narracaoFull.addClass('play pulse-slow');
					}, 8000);
				}else if(id == 'pagina3'){
					playAudio(getPhoneGapPath()+"media/page3.mp3");;
					setTimeout(function(){
						narracaoFull.addClass('play pulse-slow');
					}, 10000);
				}else if(id == 'pagina4'){
					playAudio(getPhoneGapPath()+"media/page4.mp3");
					setTimeout(function(){
						narracaoFull.addClass('play pulse-slow');
					}, 11000);
				}else if(id == 'pagina5'){
					playAudio(getPhoneGapPath()+"media/page5.mp3");
					setTimeout(function(){
						narracaoFull.addClass('play pulse-slow');
					}, 10000);
				}else if(id == 'pagina6'){
					playAudio(getPhoneGapPath()+"media/page6.mp3");
					setTimeout(function(){
						narracaoFull.addClass('play pulse-slow');
					}, 9000);
				}else if(id == 'pagina7'){
					playAudio(getPhoneGapPath()+"media/page7.mp3");
					setTimeout(function(){
						narracaoFull.addClass('play pulse-slow');
					}, 12000);
				}else if(id == 'pagina8'){
					playAudio(getPhoneGapPath()+"media/page8.mp3");
					setTimeout(function(){
						narracaoFull.addClass('play pulse-slow');
					}, 7000);
				}else if(id == 'pagina9'){
					playAudio(getPhoneGapPath()+"media/page9.mp3");
					setTimeout(function(){
						narracaoFull.addClass('play pulse-slow');
					}, 10000);
				}else if(id == 'pagina10'){
					playAudio(getPhoneGapPath()+"media/page10.mp3");
					setTimeout(function(){
						narracaoFull.addClass('play pulse-slow');
					}, 9000);
				}else if(id == 'pagina11'){
					playAudio(getPhoneGapPath()+"media/page11.mp3");
					setTimeout(function(){
						narracaoFull.addClass('play pulse-slow');
					}, 9000);
				}else if(id == 'pagina12'){
					playAudio(getPhoneGapPath()+"media/page12.mp3");
					setTimeout(function(){
						narracaoFull.addClass('play pulse-slow');
					}, 9000);
				}
			}else{
				$(this).addClass('play pulse-slow');
				stopAudio();
			}
			
		});
	},

	dragg: function() {
		$('.dragg').draggable();
	},

	page13: function(){
		var page = $('.pagina13');
		var contentLeft = page.children('.contentPagesLeft');
		var contentRight = page.children('.contentPagesRight');
		var characters = contentRight.children('.contentPage13').children('.character');

		setTimeout(function(){
			characters.animate({
				bottom: 0
			}, 1500, 'easeOutElastic');
			playAudio(getPhoneGapPath()+"media/elastic2.mp3");
		},500);
	},

	page12: function(){
		var page = $('.pagina12');
		var contentLeft = page.children('.contentPagesLeft');
		var contentRight = page.children('.contentPagesRight');
		var characters = contentRight.children('.contentPage12').children('.character');
		var olhos = contentRight.children('.contentPage12').children('.olhos');
		var narracaoPage = contentLeft.children('.contentPage12').children('.narracao');
		
		setTimeout(function(){
			for(var i=0; i<characters.length; i++){
				characters.eq(i).delay(i * 550).animate({
					bottom: 0
				}, 1000, 'easeOutElastic');
			}
			for(var i=0; i<olhos.length; i++){
				olhos.eq(i).delay(i * 550).fadeIn(500);
			}
			playAudio(getPhoneGapPath()+"media/elastic.mp3");
			setTimeout(function(){
				playAudio(getPhoneGapPath()+"media/elastic.mp3");
			}, 500);
			setTimeout(function(){
				playAudio(getPhoneGapPath()+"media/elastic.mp3");
			}, 1000);
			setTimeout(function(){
				playAudio(getPhoneGapPath()+"media/elastic.mp3");
			}, 1700);
			setTimeout(function(){
				playAudio(getPhoneGapPath()+"media/elastic.mp3");
			}, 2500);
			setTimeout(function(){
				playAudio(getPhoneGapPath()+"media/elastic.mp3");
			}, 3000);
		},1000);

		setTimeout(function(){
			contentRight.children('.contentPage12').children('.proverbio').show().addClass('scale-bounce');
			setTimeout(function(){
				narracaoPage.show().addClass('journal');
				setTimeout(function(){
					narracaoPage.show().removeClass('journal').addClass('pulse-slow');
				}, 2000);
			}, 1000);
		}, 4700);
	},

	page11: function(){
		var page = $('.pagina11');
		var contentLeft = page.children('.contentPagesLeft');
		var contentRight = page.children('.contentPagesRight');
		var narracaoPage = contentLeft.children('.contentPage11').children('.narracao');

		setTimeout(function(){
			playAudio(getPhoneGapPath()+"media/teclado.mp3");
		},1000);
		setTimeout(function(){
			contentRight.children('.contentPage11').children('.proverbio').show().addClass('scale-bounce');
			stopAudio();
			setTimeout(function(){
				narracaoPage.show().addClass('journal');
				setTimeout(function(){
					narracaoPage.show().removeClass('journal').addClass('pulse-slow');
				}, 2000);
			}, 1000);
		}, 9500);
	},

	page10: function(){
		var page = $('.pagina10');
		var contentLeft = page.children('.contentPagesLeft');
		var contentRight = page.children('.contentPagesRight');
		var character = page.children('.character');
		var zuuum = page.children('.zuuum');
		var vaso = contentLeft.children('.contentPage10').children('.vaso');
		var narracaoPage = contentLeft.children('.contentPage10').children('.narracao');

		setTimeout(function(){
			character.removeClass('characterZuum');
			zuuum.removeClass('Zuuum');
		},2500);

		vaso.on('click', function(){
			playAudio(getPhoneGapPath()+"media/zuum.mp3");
			zuuum.addClass('Zuuum');
			character.addClass('characterZuum');

			setTimeout(function(){
				character.removeClass('characterZuum');
				zuuum.removeClass('Zuuum');
			}, 2500);
		});

		setTimeout(function(){
			contentRight.children('.contentPage10').children('.proverbio').show().addClass('flip-left-bounce');
			setTimeout(function(){
				narracaoPage.show().addClass('journal');
				setTimeout(function(){
					narracaoPage.show().removeClass('journal').addClass('pulse-slow');
				}, 2000);
			}, 1000);
		}, 3000);
	},

	page9: function(){
		var page = $('.pagina9');
		var contentLeft = page.children('.contentPagesLeft');
		var contentRight = page.children('.contentPagesRight');
		var character1 = contentLeft.children('.contentPage9').children('.character1');
		var character3 = contentLeft.children('.contentPage9').children('.character3');
		var narracaoPage = contentLeft.children('.contentPage9').children('.narracao');

		setTimeout(function(){
			playAudio(getPhoneGapPath()+"media/Correr.mp3");
			character1.addClass('characterUm');
		},500);
		setTimeout(function(){
			character3.addClass('characterTres');
		},2000);

		setTimeout(function(){
			contentRight.children('.contentPage9').children('.proverbio').css('height','30%');
			setTimeout(function(){
				narracaoPage.show().addClass('journal');
				setTimeout(function(){
					narracaoPage.show().removeClass('journal').addClass('pulse-slow');
				}, 2000);
			}, 1000);
		}, 3000);
		setTimeout(function(){
			stopAudio();
		}, 4300);
	},

	page8: function(){
		var page = $('.pagina8');
		var contentLeft = page.children('.contentPagesLeft');
		var contentRight = page.children('.contentPagesRight');
		var mascara = contentRight.children('.contentPage8').children('.mascara');
		var mascara1 = contentLeft.children('.contentPage8').children('.mascara1');
		var mascara2 = contentLeft.children('.contentPage8').children('.mascara2');
		var charcaters = contentRight.children('.contentPage8').children('.mascara').children('.character');
		var charcaters2 = contentLeft.children('.contentPage8').children('.mascara1').children('.character');
		var charcaters3 = contentLeft.children('.contentPage8').children('.mascara2').children('.character');
		var narracaoPage = contentRight.children('.contentPage8').children('.narracao');

		setTimeout(function(){
			playAudio(getPhoneGapPath()+"media/elastic2.mp3");
			for(var i=0; i<charcaters.length; i++){
				var positionAction = charcaters.eq(i).attr('id');
				charcaters.eq(i).delay(i * 550).animate({
					top: positionAction
				}, 1800, 'easeOutElastic');
			}
			setTimeout(function(){
				mascara.css({
					'top':'12%',
					'height':'59%',
					'overflow':'inherit'
				});
			},200);
			charcaters.draggable({
				axis: "y",
				stop: function(){
					playAudio(getPhoneGapPath()+"media/lixo.mp3");
				},
				revert: true
			});
		},2000);

		setTimeout(function(){
			playAudio(getPhoneGapPath()+"media/elastic2.mp3");
			for(var i=0; i<charcaters2.length; i++){
				var positionAction = charcaters2.eq(i).attr('id');
				charcaters2.eq(i).delay(i * 550).animate({
					top: positionAction
				}, 1800, 'easeOutElastic');
			}
			setTimeout(function(){
				mascara1.css({
					'top':'12%',
					'height':'59%',
					'overflow':'inherit'
				});
			},200);
			charcaters2.draggable({
				axis: "y",
				stop: function(){
					playAudio(getPhoneGapPath()+"media/lixo.mp3");
				},
				revert: true
			});
		},1000);

		setTimeout(function(){
			playAudio(getPhoneGapPath()+"media/elastic2.mp3");
			for(var i=0; i<charcaters3.length; i++){
				var positionAction = charcaters3.eq(i).attr('id');
				charcaters3.eq(i).delay(i * 550).animate({
					top: positionAction
				}, 1800, 'easeOutElastic');
			}
			setTimeout(function(){
				mascara2.css({
					'top':'12%',
					'height':'59%',
					'overflow':'inherit'
				});
			},200);
			charcaters3.draggable({
				axis: "y",
				stop: function(){
					playAudio(getPhoneGapPath()+"media/lixo.mp3");
				},
				revert: true
			});
		},1500);

			
		setTimeout(function(){
			contentRight.children('.contentPage8').children('.proverbio').show().addClass('flip-bottom');
			setTimeout(function(){
				narracaoPage.show().addClass('journal');
				setTimeout(function(){
					narracaoPage.show().removeClass('journal').addClass('pulse-slow');
				}, 2000);
			}, 1000);
		}, 2500);
		
	},

	page7: function(){
		var page = $('.pagina7');
		var contentLeft = page.children('.contentPagesLeft');
		var contentRight = page.children('.contentPagesRight');
		var arvore = contentRight.children('.contentPage7').children('.arvore');
		var folhas = contentRight.children('.contentPage7').children('.folhas');
		var folha1 = contentRight.children('.contentPage7').children('.folha1');
		var folha2 = contentRight.children('.contentPage7').children('.folha2');
		var folha3 = contentRight.children('.contentPage7').children('.folha3');
		var folha4 = contentRight.children('.contentPage7').children('.folha4');
		var bolinhas = contentLeft.children('.contentPage7').children('.bolinhas');
		var narracaoPage = contentLeft.children('.contentPage7').children('.narracao');

		arvore.on('click', function(){
			playAudio(getPhoneGapPath()+"media/tree.mp3");
			$(this).removeClass('clickOn');
			$('.film').show();
			$(this).addClass('dance');
			setTimeout(function(){
				arvore.removeClass('dance');
			},1500);

			folhas.fadeIn(1500).css('top','100%');
			setTimeout(function(){
				folhas.fadeOut(1500);
				setTimeout(function(){
					folha1.css({
						'left':'31%',
						'top':'20%'
					});
					folha2.css({
						'left':'40%',
						'top':'30%'
					});
					folha3.css({
						'left':'57%',
						'top':'30%'
					});
					folha4.css({
						'left':'69%',
						'top':'21%'
					});
				}, 950);
				setTimeout(function(){
					$('.film').hide();
					$(arvore).addClass('clickOn');
				}, 1500);
			},2000);
		});	

		setTimeout(function(){
			for(var i=0; i<bolinhas.length; i++){
				bolinhas.eq(i).delay(i * 350).animate({
					top: bolinhas.eq(i).attr('data-top')
				}, 1000,'easeOutBounce').addClass('scale-bounce');
			}			
			playAudio(getPhoneGapPath()+"media/elastic.mp3");
			setTimeout(function(){
				playAudio(getPhoneGapPath()+"media/elastic.mp3");
			}, 500);
			setTimeout(function(){
				playAudio(getPhoneGapPath()+"media/elastic.mp3");
			}, 1000);
			setTimeout(function(){
				playAudio(getPhoneGapPath()+"media/elastic.mp3");
			}, 1500);

			setTimeout(function(){
				playAudio(getPhoneGapPath()+"media/elastic.mp3");
			}, 1800);
			setTimeout(function(){
				playAudio(getPhoneGapPath()+"media/elastic.mp3");
			}, 2200);
			setTimeout(function(){
				playAudio(getPhoneGapPath()+"media/elastic.mp3");
			}, 2700);
			setTimeout(function(){
				playAudio(getPhoneGapPath()+"media/elastic.mp3");
			}, 3200);
			setTimeout(function(){
				playAudio(getPhoneGapPath()+"media/elastic.mp3");
			}, 3700);
		}, 2000);

		setTimeout(function(){
			contentRight.children('.contentPage7').children('.proverbio').show().addClass('scale-bounce');
			setTimeout(function(){
				narracaoPage.show().addClass('journal');
				setTimeout(function(){
					narracaoPage.show().removeClass('journal').addClass('pulse-slow');
				}, 2000);
			}, 1000);
		}, 6000);
	},

	page6: function(){
		var page = $('.pagina6');
		var contentLeft = page.children('.contentPagesLeft');
		var contentRight = page.children('.contentPagesRight');
		var pegadas = contentLeft.children('.contentPage6').children('.pegadas');
		var galo = contentLeft.children('.contentPage6').children('.galo');
		var character = contentRight.children('.contentPage6').children('.character');
		var grades = contentRight.children('.contentPage6').children('.grades');
		var narracaoPage = contentLeft.children('.contentPage6').children('.narracao');

		setTimeout(function(){
			setTimeout(function(){
				galo.fadeIn(500).on('click', function(){
					playAudio(getPhoneGapPath()+"media/galo.mp3");
					$(this).removeClass('clickOn');
					$(this).addClass('jamp');
					setTimeout(function(){
						galo.removeClass('jamp');
						galo.addClass('clickOn');
					}, 1500);
				});	
				setTimeout(function(){
					galo.addClass('clickOn');
				}, 500);
			}, 2500);
			for(var i=0; i<pegadas.length; i++){
				pegadas.eq(i).delay(i * 650).fadeIn(500);
			}
			playAudio(getPhoneGapPath()+"media/lixo.mp3");
			setTimeout(function(){
				playAudio(getPhoneGapPath()+"media/lixo.mp3");
			}, 600);
			setTimeout(function(){
				playAudio(getPhoneGapPath()+"media/lixo.mp3");
			}, 1300);
			setTimeout(function(){
				playAudio(getPhoneGapPath()+"media/lixo.mp3");
			}, 1700);
			setTimeout(function(){
				playAudio(getPhoneGapPath()+"media/lixo.mp3");
			}, 2300);
		}, 800);

		setTimeout(function(){
			setTimeout(function(){
				character.fadeIn(500);
			}, 2500);
		}, 1500);

		setTimeout(function(){
			setTimeout(function(){
				grades.show().addClass('enter-down-bounce');
				playAudio(getPhoneGapPath()+"media/grades.mp3");
			}, 2500);
		}, 2500);
		setTimeout(function(){
			contentRight.children('.contentPage6').children('.proverbio').show().addClass('scale-bounce');
			setTimeout(function(){
				narracaoPage.show().addClass('journal');
				setTimeout(function(){
					narracaoPage.show().removeClass('journal').addClass('pulse-slow');
				}, 2000);
			}, 1000);
		}, 6000);
	},

	page5: function(){
		var page = $('.pagina5');
		var contentLeft = page.children('.contentPagesLeft');
		var contentRight = page.children('.contentPagesRight');
		var coracao = contentRight.children('.contentPage5').children('.coracao');
		var narracaoPage = contentLeft.children('.contentPage5').children('.narracao');

		setTimeout(function(){
			contentRight.children('.contentPage5').children('.proverbio').show().addClass('flip-right-bounce');
			setTimeout(function(){
				narracaoPage.show().addClass('journal');
				setTimeout(function(){
					narracaoPage.show().removeClass('journal').addClass('pulse-slow');
				}, 2000);
			}, 1000);
		}, 2000);

		coracao.on('click', function(){
			if($(this).attr('class') == 'coracao coracaoAnim'){
				stopAudio();
				$(this).removeClass('coracaoAnim');
				$(this).addClass('clickOn');
			}else{
				playAudio(getPhoneGapPath()+"media/coracao.mp3");
				$(this).removeClass('clickOn');
				$(this).addClass('coracaoAnim');
			}
		});
	},

	page4: function(){		
		var page = $('.pagina4');
		var contentLeft = page.children('.contentPagesLeft');
		var contentRight = page.children('.contentPagesRight');
		var mascara = contentLeft.children('.contentPage4').children('.mascara');
		var pa = contentRight.children('.contentPage4').children('.pazinha');
		var narracaoPage = contentLeft.children('.contentPage4').children('.narracao');

		setTimeout(function(){
			mascara.animate({
				width: '100%'
			}, 4000,'linear');
		}, 1500);
		setTimeout(function(){
			mascara.children('img').animate({
				width:'100%'
			}, 500);
		}, 5500);

		pa.droppable({
			over: function(event, ui){
				playAudio(getPhoneGapPath()+"media/lixo.mp3");
				$(event.target).children('.content').html('').append('<img src="img/page4/sujeira.png" alt="">').hide().fadeIn(500);
				setTimeout(function(){
					$(event.target).children('.content').fadeOut(500);
					setTimeout(function(){
						$(event.target).children('.content').html('');
					},500);
				}, 1000);
			}
		});
		livro.dragg();
		setTimeout(function(){
			contentLeft.children('.contentPage4').children('.passaro').show().addClass('enter-left-bounce');
		}, 4000);
		setTimeout(function(){
			contentRight.children('.contentPage4').children('.proverbio').show().addClass('flip-right-bounce');
			setTimeout(function(){
				narracaoPage.show().addClass('journal');
				setTimeout(function(){
					narracaoPage.show().removeClass('journal').addClass('pulse-slow');
				}, 2000);
			}, 1000);
		}, 5000);
	},

	page3: function () {
		var page = $('.pagina3');
		var contentLeft = page.children('.contentPagesLeft');
		var contentRight = page.children('.contentPagesRight');
		var divTi = contentRight.children('.contentPage3').children('.ouvido,.clickTiTiTi2');
		var narracaoPage = contentLeft.children('.contentPage3').children('.narracao');

		// CLIQUE NAS DIVS PARA APAREÇER TITITIT
		divTi.on('click', function(){
			playAudio(getPhoneGapPath()+"media/tititi.mp3");
			var titis = $(this).siblings('.TiTiTi');
			titis.hide();
			for(var i=0; i<titis.length; i++){
				titis.eq(i).delay(i * 100).show(900,'easeOutElastic');
			}
			titis.removeClass('default girar rotate-row').addClass('default girar rotate-row');
			setTimeout(function(){
				titis.removeClass('default girar rotate-row');
			},20000);
		});

		setTimeout(function(){
			contentRight.children('.contentPage3').children('.proverbio').show().addClass('flip-left-bounce');
			setTimeout(function(){
				narracaoPage.show().addClass('journal');
				setTimeout(function(){
					narracaoPage.show().removeClass('journal').addClass('pulse-slow');
				}, 2000);
			}, 1000);
		}, 1000);
	},

	page2: function(){
		var page = $('.pagina2');
		var contentLeft = page.children('.contentPagesLeft');
		var contentRight = page.children('.contentPagesRight');
		var narracaoPage = contentRight.children('.contentPage2').children('.narracao');


		// ENTRADA DOS PEIXES
		var peixes = contentRight.children('.contentPage2').children('.peixes');
		setTimeout(function(){
			for(var i=0; i<peixes.length; i++){
				var positionPeixes = peixes.eq(i).attr('id');
				peixes.eq(i).delay(i * 550).animate({
					top: positionPeixes
				}, 1300, 'easeOutElastic');
				playAudio(getPhoneGapPath()+"media/elastic.mp3");
				setTimeout(function(){
					playAudio(getPhoneGapPath()+"media/elastic.mp3");
				}, 500);
				setTimeout(function(){
					playAudio(getPhoneGapPath()+"media/elastic.mp3");
				}, 1000);
				setTimeout(function(){
					playAudio(getPhoneGapPath()+"media/elastic.mp3");
				}, 1700);
			}
			peixes.draggable({
				axis: "y",
				stop: function(event, ui){
					$(ui.helper).animate({
						top: $(ui.helper).attr('id')
					}, 2000, 'easeOutElastic');
					playAudio(getPhoneGapPath()+"media/elastic2.mp3");
				}
			});	
		}, 1000);

		setTimeout(function(){
			contentLeft.children('.contentPage2').children('.coroa').show().addClass('enter-down-bounce');
		}, 3000);
		setTimeout(function(){
			contentRight.children('.contentPage2').children('.proverbio').show().addClass('journal');
			setTimeout(function(){
				narracaoPage.show().addClass('journal');
				setTimeout(function(){
					narracaoPage.show().removeClass('journal').addClass('pulse-slow');
				}, 2000);
			}, 1000);
		}, 4000);
	},

	page1: function(){
		var page = $('.pagina1');
		var contentLeft = page.children('.contentPagesLeft');
		var contentRight = page.children('.contentPagesRight');
		var narracaoPage = contentLeft.children('.contentPage1').children('.narracao');

		// ANIMAÇÃO TRASHED LINHA ABELHA
		stopAudio();
		setTimeout(function(){
			playAudio(getPhoneGapPath()+"media/mosca.mp3");
			contentLeft.children('.contentPage1').children('.moscaAnimation').addClass('moscaAnimationStart');
		}, 1000);
		setTimeout(function(){
			contentLeft.children('.contentPage1').children('.trashedAnimation').animate({
				'width':'70%'
			}, 3000, 'easeOutCirc');
		}, 1500);

		setTimeout(function(){
			contentRight.children('.contentPage1').children('.proverbio').show().addClass('scale-bounce');
			setTimeout(function(){
				narracaoPage.show().addClass('journal');
				setTimeout(function(){
					narracaoPage.show().removeClass('journal').addClass('pulse-slow');
				}, 2000);
			}, 1000);
		}, 4000);

		// CLICK BLA BLA BLA
		contentRight.children('.contentPage1').children('.clickBlaBlaBla').on('click', function(){
			playAudio(getPhoneGapPath()+"media/blabla.mp3");
			var imgBla = $(this).siblings('img.bla');
			for(var i=0; i<imgBla.length; i++){
				imgBla.eq(i).hide().delay(i * 280).show(300);
				setTimeout(function(){
					imgBla.addClass('scale-bounce')
				},1000);
			}
		});

		contentRight.children('.contentPage1').children('.charactaerKbca').on('click', function(){
			playAudio(getPhoneGapPath()+"media/blabla.mp3");
			var imgBla = $(this).siblings('img.bla');
			for(var i=0; i<imgBla.length; i++){
				imgBla.eq(i).hide().delay(i * 280).show(300);
				setTimeout(function(){
					imgBla.addClass('scale-bounce')
				},1000);
			}
		});

		contentRight.children('.contentPage1').children('.mao').on('click', function(){
			playAudio(getPhoneGapPath()+"media/blabla.mp3");
			var imgBla = $(this).siblings('img.bla');
			for(var i=0; i<imgBla.length; i++){
				imgBla.eq(i).hide().delay(i * 280).show(300);
				setTimeout(function(){
					imgBla.addClass('scale-bounce')
				},1000);
			}
		});
	},

	pageIndex4: function () {
		var page = $('.paginaIndex3');
		var contentLeft = page.children('.contentPagesLeft');
		var contentRight = page.children('.contentPagesRight');
		var narracaoPage = contentRight.children('.contentPageIndex2').children('.narracao');

		setTimeout(function(){
			playAudio(getPhoneGapPath()+"media/pageIndex3.mp3");
			narracaoPage.show().addClass('journal');
			setTimeout(function(){
				narracaoPage.show().removeClass('journal').addClass('pulse-slow');
			}, 2000);
		}, 1000);
	},

	pageIndex3: function () {
		var page = $('.paginaIndex2');
		var contentLeft = page.children('.contentPagesLeft');
		var contentRight = page.children('.contentPagesRight');
		var narracaoPage = contentRight.children('.contentPageIndex2').children('.narracao');
		var character = contentLeft.children('.contentPageIndex2').children('.character');

		character.on('click', function(){
			playAudio(getPhoneGapPath()+"media/blabla.mp3");
		});
		setTimeout(function(){
			playAudio(getPhoneGapPath()+"media/pageIndex2.mp3");
			narracaoPage.show().addClass('journal');
			setTimeout(function(){
				narracaoPage.show().removeClass('journal').addClass('pulse-slow');
			}, 2000);
		}, 1000);
	},

	pageIndex2: function () {
		var page = $('.paginaIndex2');
		var contentLeft = page.children('.contentPagesLeft');
		var contentRight = page.children('.contentPagesRight');
		var character = contentLeft.children('.contentPageIndex2').children('.character');

		character.on('click', function(){
			playAudio(getPhoneGapPath()+"media/blabla.mp3");
		});
	},

	pagesNavigation: function(){
		$('.footerNavMenu').children('ul').children('li.proximo, li.anterior').on('click', function(){
			var url = $(this).attr('data-url');
			window.location.href = url;
		}); 
	},

	init: function(){
		livro.pagesNavigation();
	}
};

$(function(){
	livro.init();
	livro.playNarracao();
	topMeio();
	$( window ).resize(function() {
		topMeio();
	});
});
window.onload = function(){
	topMeio();
};
// device APIs are available
//
function onDeviceReady() {
    playAudioFundo(getPhoneGapPath()+"media/musica.mp3");
}