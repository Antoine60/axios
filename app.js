var vm = new Vue({
    el: '#app',
    data: {
        messages: []
    },
    methods:{
        init : function () {
            this.msg = 'tototo';
            var self = this;
                axios.get('http://api.openweathermap.org/data/2.5/forecast/weather?q=Amiens&APPID=596f0ffd721af40fbb901fa5bf6c8725')
                .then(function (response) {
                    self.messages = response.data.list;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
});
vm.init();

