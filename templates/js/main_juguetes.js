
if (document.getElementById("app")) {
    const { createApp } = Vue
 
    createApp({
        data() {
            return {
                juguetes: [],
                errored: false,
                loading: true,
                url: "http://localhost:5000/juguetes",
                     
                }
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.juguetes = data;
                        this.loading = false;
                    })
                    .catch(err => {
                        this.errored = true
                    })
            },
            eliminar(juguete) {
                const url = 'http://localhost:5000/juguetes/' + juguete;
                var options = {
                    method: 'DELETE',
                }
                fetch(url, options)
                    .then(res => res.text()) // or res.json()
                    .then(res => {
                        location.reload();
                    })
            }
        },
        created() {
            this.fetchData(this.url)
        }
    }).mount('#app')
}