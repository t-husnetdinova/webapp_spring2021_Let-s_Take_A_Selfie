// where we add data to populate client side template
// it is here because this is front end, unlike other backend js files

$(document).ready(() => {
    $('#modal-button').click(() => {
        $('.modal-body').html("");
        $.get(`/api/users`, (results = {}) => {
            let data = results.data;
            if (!data || !data.users) return;
            console.log('data', data)
            data.users.forEach(user => {
                $('.modal-body').append(
                    `<div>
                        <button class="${user.followed ? "followed-button" : "follow-button"} btn btn-info btn-sm" data-id="${user._id}">
                            ${user.followed ? "Followed" : "Follow"}
                        </button>
                    </div>`
                );
            });
        }).then(() => {
            addFollowButtonListener();
        });
    });
});

let addFollowButtonListener = () => {
    $('.follow-button').click(event => {
        let $button = $(event.target),
            userId = $button.data("id");
        console.log(`/api/users/${userId}/follow`)
        $.get(`/api/users/${userId}/follow`, (results = {}) => {
            let data = results.data;
            if (data && data.success) {
                $button
                    .text("Followed")
                    .addClass("followed-button")
                    .removeClass("follow-button");
            } else {
                $button.text("Try again")
            }
        });

    });
};