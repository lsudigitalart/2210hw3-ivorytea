function setup()
{
  createCanvas(1200, 650);
  background(200);
}

function draw()
{
  for(var x = 0; x < 1000; x=x+50)
  {
    for (var y = 0; y < 500; y=y+20)
    {
        fill(183, 143, 143, 50);
        rect(x, y, x + 20, y + 10);
        fill(119, 49, 49, 40);
        ellipse(x, y, y + 50, x+5);
    }
  }
  for(var y = 0; y < 1000; y=y+50)
  {
        // fill(183, 143, 143, 50);
        // rect(x, y, x + 20, y + 10);
        fill(119, 49, 49, 40);
        ellipse(10, y, y + 50);
  }

  for(var x = 400; x < 850; x=x+200)
  {
    for (var y = 250; y < 450; y=y+100)
    {
        fill(233, 196, 196, 50);
        ellipse(x, y, y + 20);
    }
  }


}
