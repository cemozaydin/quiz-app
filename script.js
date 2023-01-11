
const quiz = new Quiz(sorular);
const ui = new UI();

ui.btn_start.addEventListener("click",function(){
    ui.quiz_box.classList.add("active");
    startTimer(10);
    startTimerLine();
    ui.soruGoster(quiz.soruGetir()); 
    ui.soruSayisiGöster(quiz.soruIndex + 1, quiz.sorular.length);
    ui.next_btn.classList.remove("show");
});

ui.next_btn.addEventListener("click",function(){    
    ui.next_btn.classList.remove("show");
    if(quiz.sorular.length != quiz.soruIndex + 1 ){
        quiz.soruIndex += 1;
        clearInterval(counter);
        clearInterval(counter_line);
        startTimer(10);
        startTimerLine();
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiGöster(quiz.soruIndex + 1, quiz.sorular.length);
    }else{
        clearInterval(counter);
        clearInterval(counter_line);
        ui.quiz_box.classList.remove("active");
        ui.score_box.classList.add("active");
        ui.skoruGoster(quiz.sorular.length, quiz.dogruCevapSayisi);
    }    
});

ui.btn_quit.addEventListener("click",function(){
    window.location.reload();
});

ui.btn_replay.addEventListener("click", function(){
    quiz.soruIndex=0;
    quiz.dogruCevapSayisi=0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");
});


function optionSelected(option){
    clearInterval(counter);
    clearInterval(counter_line);

    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();

    if(soru.cevapKontrolEt(cevap)){
        quiz.dogruCevapSayisi +=1;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend",ui.correctIcon);
    }
    else{
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend",ui.incorrectIcon);
    }

    for(let i = 0; i< ui.option_list.children.length; i++){
        ui.option_list.children[i].classList.add("disabled");
    }
    ui.next_btn.classList.add("show");
}

let counter;
let counter_line;
function startTimer(time){
    counter=setInterval(timer,1000);

    function timer(){
        ui.time_second.textContent = time;
        time--;
        if(time<0){
            clearInterval(counter);

            ui.time_text.textContent="Süre Bitti";

            let cevap = quiz.soruGetir().dogruCevap;
            for(let opt of ui.option_list.children){
                if(opt.querySelector("span b").textContent == cevap){
                    opt.classList.add("correct");
                    opt.insertAdjacentHTML("beforeend",ui.correctIcon);
                }
                opt.classList.add("disabled");
                ui.next_btn.classList.add("show");
            }
        }
    }
}

function startTimerLine(){
    let line_width = 0;

    counter_line = setInterval(timer,20);

    function timer(){
        line_width += 1;
        ui.time_line.style.width = line_width + "px";

        if(line_width>545){
            clearInterval(counter_line);
        }
    }
}