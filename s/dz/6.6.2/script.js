var vm = new Vue({
	el: "#app",
	data: {
      one: false,
      two: false,
      result: "false"

    },
    methods: {
        some: function(){
            this.result = (this.one && this.two)? "true":"false";
        }
    }
});