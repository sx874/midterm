//cursor shenanigans
var cursor = {
    _x: 0,
    _y: 0,
    $dot: document.querySelector('.cursor-dot'),
    
    func: function() {
      this.setupEventListeners();
    },
    
    setupEventListeners: function() {
      var self = this;
      document.addEventListener('mousemove', function(x) {
        //showing the cursor
        self.cursorVisible = true;
        if (self.cursorVisible) {
          self.$dot.style.opacity = 1;
        } else {
          self.$dot.style.opacity = 0;
        }
        //positioning cursor
        self.endX = x.pageX;
        self.endY = x.pageY;
        self.$dot.style.top = self.endY + 'px';
        self.$dot.style.left = self.endX +'px';

        //toggling click size animation -- nullifies ability to click on links though
        document.addEventListener('mousedown', () => { 
            self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
          });
          document.addEventListener('mouseup', () => {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
          });   
      });
      
    },
  }
  
  cursor.func();





//typeout animation on header

window.addEventListener("load", (event) => {
    console.log("window loaded");
    typeout();
});
function typeout() {
    const string = "why hello there";
    const str = string.split("");
    const el = document.getElementById('str');
    setTimeout(() => {
        (function animate() {
            str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
            const running = setTimeout(animate, 90);
        })();
    }, 500)
    
};



