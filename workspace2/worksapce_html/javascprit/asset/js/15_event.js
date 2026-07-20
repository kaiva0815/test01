console.log('hello js')

const btn1 = document.querySelector('#btn1')

console.log(1, 'btn1', btn1)

console.log(window)

// 페이지 로딩 이벤트가 발생하면

// window.onload = function(){
//     const btn1 = document.querySelector('#btn1')
//     console.log(2, 'btn1', btn1)
// }

function init(){
    const btn1 = document.querySelector('#btn1')
    console.log(2, 'btn1', btn1)

    const game = document.querySelector('#game')
    let le = '0'
    let to = '0'
    let bo = '0' 
    game.style.left= '20px'
    game.style.top= '20px'
    // log(game.style.bottom= '20px')
    // let ri = '20px' 
    // log(game.style.right= '20px')

    bind()
}

window.onload = init

// onload 페이지 로딩이 끝난뒤에 실행하는 비동기 명령어
// 몇개가 있든 하나만 발동된다


// window.addEventListener('load', init)
// window.addEventListener('load', init)
// window.addEventListener('load', init)

function bind () {
    const btn1 = document.querySelector('#btn1')
    btn1.onclick=function(){
        console.log('btn1 클릭')
    }
    btn1.onclick=function(){
        console.log('btn1 click')
    }
    // 영어만 나오는 이유는 나중에 나온게 먼저 나온거에 덮어쓰기 때문
    const btn2 = document.querySelector('#btn2')
    btn2.addEventListener('click', function(){
        console.log('btn2 클릭')
    })
    btn2.addEventListener('click', function(){
        console.log('btn2 click')
    })
    // addEventListener 은 동시에 나온다
    
    const btn4 = document.querySelector('#btn4')
    btn4.addEventListener('click',btn4click)
    btn4.removeEventListener('click',btn4click)
    // removeEventListener 은 이벤트 제거
    // 단 익명함수는 제거가 많이 어려움 사실상 불가능
    
    const login = document.querySelector('#login')
    login.addEventListener('click', function(){
        const id = document.querySelector('#id')
        const pw = document.querySelector('#pw')
    
        console.log('id', id.value)
        console.log('pw', pw.value)
    
    const warring= document.querySelector('.warring')
        // id 를 적었는지 판단
        if (id.value.trim()==''){
            console.log('id는 필수입니다')
            warring.innerText='아이디는 필수입니다.'
            log('아이디는 필수입니다')

        }
        // 오타 확인 똑바로 겐세이 겁나 들어온다 
        // 들여쓰기 좀 잘하자 오타 들여쓰기에 겐세이 몇번을 당하냐
                else if (pw.value.trim()==''){
                    warring.innerText='비밀번호는 필수입니다.'
            log('pw는 필수입니다')
                }


    })

    document.querySelector('#id').addEventListener('keydown', function(){
        log('keydown 발생')
    })
    document.querySelector('#id').addEventListener('keyup', function(event){
        // log('keyup 발생')
        // console.log(event)
        // log('key:'+event.key)
        log('keyCode:'+event.keyCode)
        
        // log('shiftKey:'+event.shiftKey)
        // log('ctrlCode:'+event.ctrlKey)
        // log('altCode:'+event.altKey)

        if(event.keyCode==13){ //엔터
            log('엔터빵')   
            const pw = document.querySelector('#pw')
            pw.focus()
                     
        }
        if(event.keyCode==67&&event.keyCode) { 
            alert('ctrl + c')
        }
        
    })
     document.querySelector('#id').addEventListener('keydown', function(){
         if(event.keyCode==13){ //엔터
             const login = document.querySelector('#login')
             login.click()


     }
    })

    document.querySelector('#top').addEventListener('click', function(event){
        console.log(document.documentElement.scrollTop)
        // document.documentElement.scrollTop=0
        window.scrollTo(
            {
                top:0,
                behavior:'smooth'
            }
        )
    })

    // window.addEventListener('scroll', function(){ 
    //     console.log('window.scrollY',window.scrollY)
    // })

    document.querySelector('body').addEventListener('keydown', function(event){
        // log(event.keyCode)
        const game = document.querySelector('#game')
        // log(game.style.left)
        // let ri = log(game.style.right)
        if(event.keyCode == 39){ //오른쪽
            // parseInt.log(game.style.right)+10+'px'
            let ri = parseInt(game.style.left)
            // ri = ri+10+'px'
            // 두개 동일
            // game.style.left = ri+10+'px'
            game.style.left = parseInt(game.style.left)+10+'px'

            // 피드백
            // 1.콘솔로그에 나온 값이 곧이곧대로 스타일 값에 들어가지 않음.
            // 2.콘솔로그는 출력만 나오는것 
            // 이번 문제에서 콘솔로그에 출력된 값을 원하는 곳에 붙혀넣는 식 을 알아야함.
            
            // parseInt(log(game.style.right=20)+10)+'px'
            // ri = Number(ri
            console.log(ri)


            

        
        // 일단 계획을 세워
        // 안되는거 먼저 넣저
        // 오른쪽 값에 변수 ri를 20px로 주고 keyCode 39가 입력될때마다 10px을 더한다는 안된다
        // 에시당초 콘솔로그로도 찍히기 전에 문제가 생김 파스인트로도 충족이 되지않음 
        // 파스인트로 가져와

        }else if(event.keyCode == 37){ //왼쪽
            // parseInt.log(game.style.right)+10+'px'
            let ri = parseInt(game.style.left)
            // ri = ri+10+'px'
            // 두개 동일
            // game.style.left = ri+10+'px'
            game.style.left = parseInt(game.style.left)-10+'px'
        }
        if(event.keyCode == 40){ //아래
            // parseInt.log(game.style.right)+10+'px'
            let ri = parseInt(game.style.top)
            // ri = ri+10+'px'
            // 두개 동일
            // game.style.left = ri+10+'px'
            game.style.top = parseInt(game.style.top)+10+'px'
        }
        if(event.keyCode == 38){ //아래
            // parseInt.log(game.style.right)+10+'px'
            let ri = parseInt(game.style.top)
            // ri = ri+10+'px'
            // 두개 동일
            // game.style.left = ri+10+'px'
            game.style.top = parseInt(game.style.top)-10+'px'
        }
    })




    
    
}
function btn3click(){
    console.log('btn3 click')

}


function btn4click(){
    console.log('btn4 click')
}


// function see () {
//     const id = document.querySelector('#id')
//     const pw = document.querySelector('#pw')
//     로그인.addEventListener('아이디 비밀번호', function(){
//     console.log(id)
//     console.log(pw)
//     })

    
//     // console.log(id)
// }

function log(message){
        const div = document.createElement('div')
        div.classList.add('log')
        div.innerHTML=message
        const view= document.querySelector('#view')
        view.prepend(div)
}

let t_value1 = 50
console.log(t_value1, typeof t_value1)
let t_value2 = '50'
console.log(t_value2, typeof t_value2)
// let asdf = t_value2 = '50'
// Number(asdf)
let a = Number(t_value2)
console.log(a, typeof a)
let b = a+''
console.log(b, typeof b)
