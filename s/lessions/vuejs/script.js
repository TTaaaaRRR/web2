var vm = new Vue({
	el: "#app",
	data: {
       a: 1,
       b: 0,
       c: 0
    },
    methods: {
        drawplot: function(){
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


