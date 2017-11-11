var vm = new Vue({
	el: "#app",
	data: {
        thing: "",
        publkey: "",
        txt: "lolo"
    },
    methods: {
        encr: function(){
            if(this.publkey != ""){
                this.txt = cryptico.encrypt(this.thing, this.publkey).cipher;

            }
        }
    }
});


