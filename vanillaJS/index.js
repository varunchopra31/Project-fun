let getDataBtn = document.getElementById("getData")
let userListContainer = document.querySelector(".user-list-container")
let searchAndFilterContainer = document.querySelector(".search-and-filter")
let searchUser = document.getElementById("searchUser")
let filterUser = document.getElementById("filterUser")
let usersData = []

window.addEventListener("load", () => {
    let userData = localStorage.getItem("userData")
    if (userData)
        showUserList(JSON.parse(userData))
})

getDataBtn.addEventListener("click", () => {
    fetch("https://reqres.in/api/users")
        .then(response => response.json())
        .then(data => {
            usersData = data.data
            localStorage.setItem("userData", JSON.stringify(usersData))
            showUserList(data.data)
        })
})

searchUserFunc = () => {
    clearUserList()
    if (searchUser.value === "")
        showUserList(usersData)
    else {
        showUserList(
            usersData.filter(user =>
                `${user.first_name} ${user.last_name}`.toLowerCase()
                    .includes(searchUser.value.toLowerCase())
            )
        )
    }
}

filterUserFunc = () => {
    let sortedList = usersData.sort((user1, user2) => {
        if (user1.first_name > user2.first_name) {
            return 1
        } else if (user1.first_name < user2.first_name) {
            return -1
        }
        else 0
    })

    clearUserList()
    showUserList(filterUser.value === "asc" ? sortedList.reverse() : sortedList)
}

// remove rendered list
clearUserList = () => {
    userListContainer.innerHTML = ''
}

// render users list
showUserList = userList => {
    searchAndFilterContainer.className = searchAndFilterContainer.className + " show"
    userList.map(user => {
        userListContainer.insertAdjacentHTML(
            "afterbegin",
            `<div class="user-card">
            <img src=${user.avatar} />
                <p>${user.first_name} ${user.last_name}</p>
                <a href=mailto:${user.email}>${user.email}</a>
            </div>
            `)
    })
}
