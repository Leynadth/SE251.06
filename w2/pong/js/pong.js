//canvas and context
var scoreboard = document.querySelectorAll('#score div');
var c = document.querySelector(`#pong`)
var ctx = c.getContext(`2d`)

//timer to make the game run at 60fps
var timer = setInterval(main, 1000/60)

//global friction variable
var fy = .97

const players = []
players[0] = new Player();
players[1] = new Player();

const pad = []
pad[0] = players[0].pad
pad[1] = players[1].pad

//p1 setup
pad[0].w = 20
pad[0].h = 150
pad[0].x = 0 + pad[0].w/2
pad[0].color = 'blue'

pad[1].w = 20
pad[1].h = 150
pad[1].x = 780 + pad[1].w/2
pad[1].color = 'yellow'

//ball setup
var ball = new Box();
ball.w = 20
ball.h = 20
ball.vx = Math.round(rand(-1, 1)) * 3
if (ball.vx === 0 ){
    ball.vx = 3
}
ball.vy = 5
ball.color = `black`


function main()
{
    //erases the canvas
    ctx.clearRect(0,0,c.width,c.height)
    
    //p1 accelerates when key is pressed 
    if(keys[`w`])
    {
       pad[0].vy += -pad[0].force
    }

    if(keys[`s`])
    {
        pad[0].vy += pad[0].force
    }
    //applies friction
    pad[0].vy *= fy
    //player movement
    pad[0].move();

    if(keys[`ArrowUp`])
    {
       pad[1].vy += -pad[1].force
    }

    if(keys[`ArrowDown`])
    {
        pad[1].vy += pad[1].force
    }
    //applies friction
    pad[1].vy *= fy
    //player movement
    pad[1].move();
        //applies friction
        pad[1].vy *= fy
        //player movement
        pad[1].move();

    //ball movement
    ball.move()

    //p1 collision
for (let index = 0; index < array.length; index++) {
    const element = array[index];
        if(pad[i].y < i+pad[i].h/2)
        {
            pad[i].y = i+pad[i].h/2
        }
        if(pad[i].y > c.height-pad[i].h/2)
        {           
        pad[i].y = c.height-pad[i].h/2
        }
        pad[i].draw()
        pad[i].draw()


    //ball collision 
    if(ball.x < 0)
    {
        ball.x = c.width/2
        ball.y  =c.height/2
        ball.color = getRandomColor()
        players[1].score += 1

    }
    if(ball.x >= 800)
    {
        ball.x = c.width/2
        ball.y  = c.height/2
        ball.color = getRandomColor()
        players[0].score += 1
    }
    if(ball.x > c.width)
    {
        ball.x = c.width
        ball.vx = -ball.vx
    }
    if(ball.y < 0)
    {
        ball.y = 0
        ball.vy = -ball.vy
    }
    if(ball.y > c.height)
    {
        ball.y = c.height
        ball.vy = -ball.vy
       
    }

    //p1 with ball collision
for (let index = 0; index < array.length; index++) {
    const element = array[index];
        if(ball.collide(pad[i]))
        {
            ball.x = pad[i].x + pad[i].w/2 + ball.w/2
            ball.vx = -ball.vx;
        }
}
    
    ball.draw()
    for (var i = 0; i < scoreboard.length; i++) {
        scoreboard[i].innerText = `Player ${i + 1} Score: ${players[i].score}`;
    }
    console.log(`${players[0].score} | ${players[1].score}`)
    
}}
