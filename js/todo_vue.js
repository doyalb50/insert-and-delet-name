const app = new Vue({
    el: '#vue_app',
    created: function() {
        console.log('created');
    },
    data: function() {
        return {
            todo_title: '',
            todo_list_array: [{
                    checked: false,
                    title: 'Mahfuz',
                },
                {
                    checked: false,
                    title: 'Mainol',
                },



            ],
        }
    },
    methods: {
        show_todo_title_value: function() {
            console.log(this.todo_title);
        },
        insert_new_value: function() {
            let data = {

                checked: false,
                title: this.todo_title,

            };

            if (this.todo_title) {
                this.todo_list_array.push(data);
                this.todo_title = '';
            } else {
                // let str = new.String("you don't give any valu!!");
                // alert(str.fontcolor("red"));
                alert('please insert a value');
            }
        },
        remove_data: function(index) {
            this.todo_list_array.splice(index, 1);
            alert('Are You want to permenantly delet this value?');
        },
        // alert('succsess');
    }
});