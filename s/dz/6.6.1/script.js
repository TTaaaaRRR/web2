var vm = new Vue({
	el: "#app",
	data: {
       a: 1,
       b: 0,
       c: 0,
       d: 0,
       z:false,
       mz: false,
       lz: false,
       x: 0,
       x1: 0,
       x2: 0

    },
    methods: {
        drawplot: function(){

            this.d = (this.b * this.b) - ( this.c * 4);
            if(this.d == 0){
                this.lz = false;
                this.mz = false;
                this.z = true;
                this.x = -this.b / 2;
            }
            else if(this.d > 0){
                this.mz = true;
                this.lz = false;
                this.z = false;
                this.x1 = (-this.b - Math.sqrt(this.d)) / 2;
                this.x2 = (-this.b + Math.sqrt(this.d)) / 2;
            }
            else{
                this.lz = true;
                this.mz = false;
                this.z = false;
        
            }
            

            functionPlot({
                target: "#plot",
                data: [{
                    fn: "x * x + " + this.b + " * x + " + this.c 
                }],
                grid: true
            });
        }
    }
});


