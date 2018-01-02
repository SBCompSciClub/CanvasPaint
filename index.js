const ARC_RADIUS = 5;
let mouseDown;
let canvasElement;
let canvasContext;
let previousX;
let previousY;
let currentX;
let currentY;
function main()
{
    canvasElement = document.getElementById("CanvasPainter");
    let canvasElementStyle = window.getComputedStyle(canvasElement);
    canvasElement.width = parseInt(canvasElementStyle.width);
    canvasElement.height = parseInt(canvasElementStyle.height);
    canvasContext = canvasElement.getContext("2d");
    
    window.onresize = (event) =>
    {
        canvasElement.width = parseInt(canvasElementStyle.width);
        canvasElement.height = parseInt(canvasElementStyle.height);
    }
    
    if (!canvasContext)
    {
        alert("Error: Couldn't create canvasContext");
    }
    canvasElement.onmousedown = (event) =>
    {
        mouseDown = true;
        previousX = event.x;
        previousY = event.y;
        Draw(event);
    }
    canvasElement.onmousemove = (event) =>
    {
        currentX = event.x;
        currentY = event.y;
        if (mouseDown)
        {
            Draw(event);
        }    
    }
    canvasElement.onmouseup = (event) =>
    {
        mouseDown = false;
        Draw(event);
    }
    canvasElement.oncontextmenu = (event) => {
        event.preventDefault();
    }
}
function Draw(event)
{
    canvasContext.beginPath();
    canvasContext.arc(event.x, event.y, ARC_RADIUS, 0, Math.PI * 2);
    canvasContext.fill();
    canvasContext.beginPath();
    canvasContext.lineWidth = ARC_RADIUS*2;
    canvasContext.moveTo(previousX,previousY);
    canvasContext.lineTo(currentX,currentY);
    canvasContext.stroke();
    previousX = event.x;
    previousY = event.y;
}

main();
