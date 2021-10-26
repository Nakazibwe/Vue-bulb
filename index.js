Vue.createApp({
    data() {
        return {
            light:false,
            
        }
    
    },
 
    methods: {
        switching(){
            { this.light = !this.light };
           
            
        }
    },
    
}).mount("#container");
