Vue.createApp({
    data() {
        return {
            light:true,
            
        }
    
    },
 
    methods: {
        switching: () => {
            this.light = !this.light;
           
            
        }
    },
    
}).mount("#container");
