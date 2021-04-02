   // Make sure we wait to attach our handlers until the DOM is fully loaded.
   document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }

    const createDevourBtns = document.getElementsByClassName('button')
    console.log(createDevourBtns)
    if (createDevourBtns.length > 0) {

        createDevourBtns.addEventListener("click", function () { 

            const id = document.getElementsByClassName('button').getAttribute("data-id")
            console.log(id)
            
    
    
                fetch(`/api/burgers/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                }).then((res) => {
                    if (res.ok) {
                        location.reload()
                    }
                })
                    .catch((err) => {
                        console.log(err)
    
                    })
    
    
        })
    }
    

    //create burgers 
    const createBurgerBtn = document.getElementById('burgerSubmitBtn')
    createBurgerBtn.addEventListener("click", function () {
        const newBurger = {
            name: document.getElementById('ca').value.trim(),
        }
        console.log(newBurger)
        fetch('/api/burgers', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBurger)
        }).then((res) => {
            console.log("created"); if (res.ok) {
                location.reload()
            }
        })
            .catch((err) => {
                console.log(err)

            })

    });
});
