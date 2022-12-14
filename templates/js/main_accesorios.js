// accesorios
if (document.getElementById("app")) {
    const { createApp } = Vue
 
    createApp({
        data() {
            return {
                accesorios: [],
                errored: false,
                loading: true,
                url: "http://localhost:5000/accesorios",
                     
                }
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.accesorios = data;
                        this.loading = false;
                    })
                    .catch(err => {
                        this.errored = true
                    })
            },
            eliminar(accesorio) {
                const url = 'http://localhost:5000/accesorios/' + accesorio;
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



